import React from 'react';
import ButtonVolverPaginaPrincipal from '../../Components/ButtonVolverPaginaPrincipal/ButtonVolverPaginaPrincipal';
import Login from '../../Components/Login/Login';
import './LoginPage.css';

const LoginPage = () => {
  localStorage.removeItem('access-token');

  return (
    <div className="login-page text-center position-relative">
      <div className="position-absolute top-50 start-50 translate-middle">
      <h2 className="text-login fs-1 pt-0 pb-2 d-block text-light">Ingresá</h2>
      <Login />
      <ButtonVolverPaginaPrincipal />
    </div>
    </div>
  );
};

export default LoginPage;