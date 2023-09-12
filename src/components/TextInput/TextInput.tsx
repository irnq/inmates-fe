import clsx from 'clsx';
import styles from './styles.module.scss';

interface ITextInputProps {
  label: string;
  vertical?: boolean;
  password?: boolean;
  name?: string;
  warning?: string[];
  required?: boolean;
  multiline?: boolean;
  onChange: (value: string, name?: string) => void;
}

const TextInput: React.FunctionComponent<ITextInputProps> = (props) => {
  if (props.multiline) {
    return (
      <label className={clsx(styles.label, { [styles.vertical]: props.vertical })}>
        {props.label}
        {!!props.warning?.length && (
          <span className={clsx(styles.warningMessages)}>{props.warning[0]}</span>
        )}
        <textarea
          className={clsx(styles.input, { [styles.warning]: !!props.warning?.length })}
          required={props.required}
          cols={200}
          rows={5}
          onChange={(e) => props.onChange(e.target.value, props.name)}
        />
      </label>
    );
  }
  return (
    <label className={clsx(styles.label, { [styles.vertical]: props.vertical })}>
      {props.label}
      {!!props.warning?.length && (
        <span className={clsx(styles.warningMessages)}>{props.warning[0]}</span>
      )}
      <input
        className={clsx(styles.input, { [styles.warning]: !!props.warning?.length })}
        type={props.password ? 'password' : 'text'}
        required={props.required}
        onChange={(e) => props.onChange(e.target.value, props.name)}
      />
    </label>
  );
};

export default TextInput;
