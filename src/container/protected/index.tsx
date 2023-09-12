import { memo, useEffect, useContext } from 'react';
import { Context } from '../..';
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';

type Props = {
  redirect?: string;
  children: React.ReactNode;
};

function Protected({ children, redirect }: Props) {
  const { store } = useContext(Context);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!store.isAuth && !store.isLoading) {
      navigate(redirect ?? '/', { state: { back: location.pathname } });
    }
  }, [location.pathname, navigate, redirect, store.isAuth, store.isLoading]);

  if (!store.isAuth || store.isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
}

const memoized = memo(Protected);

export default memoized;
