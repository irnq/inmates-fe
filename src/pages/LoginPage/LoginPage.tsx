import { FormEvent, useState, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import TextInput from '../../components/TextInput/TextInput';
import { Context } from '../..';
import styles from './styles.module.scss';
import Card from '../../components/Card/Card';
import { Button } from '../../components/Button';
import { observer } from 'mobx-react-lite';
import Loader from '../../components/Loader';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { store } = useContext(Context);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    store.login(email, password);
  };

  return (
    <Card
      title='Login to Inmates'
      style={{
        marginTop: '4rem',
      }}
    >
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextInput label='Email:' onChange={setEmail} required />
        <TextInput label='Password:' onChange={setPassword} password required />
        <div className={styles.btnBlock}>
          <Button viewType='text'>
            <Link to='/signup'>Sign up</Link>
          </Button>
          <Button type='submit' title='Login' viewType='filled' />
        </div>
      </form>
      {store.isLoading && <Loader />}
    </Card>
  );
};

export default observer(LoginPage);
