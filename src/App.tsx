import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import MainPage from './pages/MainPage/index';
import { useContext, useEffect } from 'react';
import { Context } from '.';
import { observer } from 'mobx-react-lite';
import Main from './layout/main';
import Header from './layout/header';
import Footer from './layout/footer';
import PageLayout from './layout/page-layout';

import { lsTokenKey } from './store/Store';

function App() {
  const { store } = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem(lsTokenKey)) {
      store.checkAuth();
    }
  }, [store]);

  return (
    <div className='App'>
      <BrowserRouter>
        <PageLayout>
          <Header></Header>
          <Main>
            <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/login' element={<LoginPage />} />
              <Route path='/signup' element={<RegistrationPage />} />
            </Routes>
          </Main>
          <Footer></Footer>
        </PageLayout>
      </BrowserRouter>
    </div>
  );
}

export default observer(App);
