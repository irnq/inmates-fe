import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: React.ReactNode;
}

const PageLayout: FC<Props> = (props) => {
  return <div className={styles.page}>{props.children}</div>;
};

export default PageLayout;
