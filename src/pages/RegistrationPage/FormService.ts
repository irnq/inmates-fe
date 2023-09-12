export const INITIAL_STATE = {
  name: '',
  nickname: '',
  email: '',
  password: '',
  city: '',
  birthday: '',
  confirmationPassword: '',
};

export type FormState = typeof INITIAL_STATE;

export enum FieldName {
  name = 'name',
  nickname = 'nickname',
  email = 'email',
  password = 'password',
  city = 'city',
  birthday = 'birthday',
  confirmationPassword = 'confirmationPassword',
}

export const isFieldName = (string: string): string is FieldName => {
  return Object.keys(FieldName).includes(string);
};

export interface IAction {
  field: FieldName;
  payload: string;
}

export const formReducer = (state: FormState, action: IAction): FormState => {
  const { field, payload } = action;

  return {
    ...state,
    [field]: payload,
  };
};

const mailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const hasDigitFormat = /.*\d+.*/;
const hasLowerCaseFormat = /.*[a-z]+.*/;
const hasUpperCaseFormat = /.*[A-Z]+.*/;

const validateFn = {
  required: (value: string): true | string => (!!value ? true : 'Field required'),
  lengthMin: (value: string, number: number): true | string =>
    value.trim().length >= number ? true : `Should contain at least ${number} characters`,
  lengthMax: (value: string, number: number): true | string =>
    value.trim().length <= number ? true : `Should contain no more than ${number} characters`,
  email: (value: string): true | string => (mailFormat.test(value) ? true : 'Invalid email'),
  hasDigit: (value: string): true | string =>
    hasDigitFormat.test(value) ? true : 'Must contain a digit',
  hasLowerCase: (value: string): true | string =>
    hasLowerCaseFormat.test(value) ? true : 'Must contain upper and lower case letters',
  hasUpperCase: (value: string): true | string =>
    hasUpperCaseFormat.test(value) ? true : 'Must contain upper and lower case letters',
};

type ValidateType = Partial<typeof validateFn>;

export type FormError = Partial<Record<keyof FormState, string[]>>;

export class ValidateForm {
  state;
  options;
  constructor(
    state: FormState,
    options: Record<keyof FormState, Partial<Record<keyof ValidateType, number | boolean>>>,
  ) {
    this.state = state;
    this.options = options;
  }

  validate() {
    const validationResult = Object.keys(this.options).reduce((errors: FormError, field) => {
      errors[field as keyof FormState] = Object.keys(this.options[field as keyof FormState])
        .map((option) => {
          const value = this.state[field as keyof FormState];
          if (
            typeof this.options[field as keyof FormState][option as keyof ValidateType] === 'number'
          ) {
            const number = this.options[field as keyof FormState][
              option as keyof ValidateType
            ] as number;
            return validateFn[option as keyof ValidateType](value, number);
          } else if (this.options[field as keyof FormState][option as keyof ValidateType]) {
            return validateFn[option as keyof ValidateType](value, 0);
          }
          return true;
        })
        .filter((message): message is string => message !== true);

      return errors;
    }, {} as FormError);

    if (Object.values(validationResult).every((errors) => errors.length === 0)) {
      return null;
    }
    return validationResult;
  }
}
