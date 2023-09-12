import clsx from 'clsx';
import { FormEvent, useReducer, useState, useContext } from 'react';
import { Context } from '../..';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import Card from '../../components/Card/Card';
import { DatePicker } from '../../components/DatePicker';
import TextInput from '../../components/TextInput/TextInput';
import {
  formReducer,
  INITIAL_STATE,
  FieldName,
  isFieldName,
  ValidateForm,
  FormError,
} from './FormService';
import styles from './styles.module.scss';
import { observer } from 'mobx-react-lite';

const RegistrationPage = () => {
  const [state, dispatch] = useReducer(formReducer, { ...INITIAL_STATE });
  const [errors, setErrors] = useState({} as FormError);
  const { store } = useContext(Context);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const validateForm = new ValidateForm(state, {
      name: {
        lengthMin: 2,
        lengthMax: 30,
      },
      nickname: {
        lengthMin: 2,
        lengthMax: 30,
      },
      email: {
        email: true,
      },
      birthday: {
        required: true,
      },
      city: {
        required: true,
      },
      password: {
        lengthMin: 5,
        hasDigit: true,
        hasLowerCase: true,
        hasUpperCase: true,
      },
      confirmationPassword: {},
    });
    const validationResult = validateForm.validate();
    const passwordMatch = state.password === state.confirmationPassword;
    if (validationResult === null && passwordMatch) {
      store.registration(state);
    } else {
      setErrors((prevValue) => {
        let nextValue = prevValue;
        if (validationResult) {
          nextValue = validationResult;
        }
        nextValue = {
          ...nextValue,
          confirmationPassword: passwordMatch ? [] : [`The password don't match`],
        };

        return nextValue;
      });
    }
  };

  const handleInputChange = (value: string, name?: string) => {
    setErrors({
      ...errors,
      [name as keyof FormError]: [],
      confirmationPassword: [],
    });
    if (name && isFieldName(name)) {
      dispatch({
        field: FieldName[name],
        payload: value,
      });
    }
  };

  return (
    <Card
      title='Create an account'
      style={{
        marginTop: '4rem',
      }}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div className={clsx(styles.side, styles.leftSide)}>
            <TextInput
              name='name'
              label='Name'
              onChange={handleInputChange}
              warning={errors.name}
              vertical
            />
            <TextInput
              name='nickname'
              label='Nickname'
              onChange={handleInputChange}
              warning={errors.nickname}
              vertical
            />
            <TextInput
              name='email'
              label='Email'
              onChange={handleInputChange}
              warning={errors.email}
              vertical
            />
            <TextInput
              name='password'
              label='Password'
              onChange={handleInputChange}
              warning={errors.password}
              vertical
              password
            />
          </div>
          <div className={clsx(styles.side, styles.rightSide)}>
            <DatePicker
              name='birthday'
              label='Birthday'
              min='1930-01-01'
              max='2005-01-01'
              onChange={handleInputChange}
              required
              vertical
            />
            <TextInput
              name='city'
              label='City'
              onChange={handleInputChange}
              warning={errors.city}
              vertical
            />
            <TextInput
              name='confirmationPassword'
              label='Confirm password'
              onChange={handleInputChange}
              warning={errors.confirmationPassword}
              vertical
              password
            />
          </div>
        </div>
        <div className={styles.btnBlock}>
          <Button viewType='text'>
            <Link to='/login'>I have an account</Link>
          </Button>
          <Button type='submit' title='Submit' viewType='filled' />
        </div>
      </form>
    </Card>
  );
};

export default observer(RegistrationPage);
