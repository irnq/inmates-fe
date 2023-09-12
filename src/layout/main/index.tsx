import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
}

const Main: FC<Props> = (props) => {
  return <main className={styles.main}>{props.children}</main>;
};

export default Main;
