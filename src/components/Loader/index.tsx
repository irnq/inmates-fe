import styles from './styles.module.scss';
import { Blocks } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Blocks width={'30%'} height={'30%'} ariaLabel='loading...' wrapperClass={styles.backdrop} />
  );
};

export default Loader;
