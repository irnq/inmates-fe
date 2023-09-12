import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
}

const Footer: FC<Props> = (props) => {
  return (
    <footer className={styles.footer}>
      {props.children}
      <span>
        <a href='https://github.com/irnq' target='_blank' rel='noreferrer'>
          irnq
        </a>{' '}
        2023
      </span>
    </footer>
  );
};

export default Footer;
