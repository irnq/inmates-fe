import { FC } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

interface Props {
  label?: string;
  name?: string;
  vertical?: boolean;
  max?: string;
  min?: string;
  required?: boolean;
  onChange: (value: string, name?: string) => void;
}

export const DatePicker: FC<Props> = ({
  label = '',
  max = '',
  min = '',
  vertical = false,
  name = '',
  required = false,
  onChange = () => {},
}) => {
  return (
    <label className={clsx(styles.label, { [styles.vertical]: vertical })}>
      {label}
      <input
        type='date'
        className={styles.input}
        max={max}
        min={min}
        required={required}
        onChange={(e) => onChange(e.target.value, name)}
      />
    </label>
  );
};
