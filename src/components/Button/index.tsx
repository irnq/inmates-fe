import { FC } from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';

export interface IButtonProps {
  type?: 'button' | 'reset' | 'submit';
  viewType?: 'outlined' | 'text' | 'elevated' | 'filled';
  title?: string;
  classNames?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const Button: FC<IButtonProps> = ({
  type = 'button',
  viewType = 'filled',
  title = '',
  classNames = '',
  children,
  onClick = () => {},
}) => {
  return (
    <button
      className={clsx(styles.btn, styles[viewType], classNames)}
      onClick={onClick}
      type={type}
    >
      {title}
      {children}
    </button>
  );
};
