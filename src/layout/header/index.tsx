import { FC, useContext } from 'react';
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import styles from './styles.module.scss';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}

const Header: FC<Props> = (props) => {
  const { store } = useContext(Context);
  return (
    <header className={styles.header}>
      {props.children}

      {store.isAuth ? (
        <>
          <span>{store.user.nickname}</span>
          <Button viewType='text' onClick={store.logout}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <Button viewType='text'>
            <Link to='/login'>Login</Link>
          </Button>
          <Button viewType='text'>
            <Link to='/signup'>Sign up</Link>
          </Button>
        </>
      )}
    </header>
  );
};

export default observer(Header);
