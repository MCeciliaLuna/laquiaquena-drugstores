import React from "react";
import BotonWhatsapp from "../../Components/BotonWhatsapp/BotonWhatsapp";
import Footer from "../../Components/Footer/Footer";
import LoginForm from "../../Components/LoginForm/LoginForm";
import './Login.css'


const Login = () => {
  localStorage.clear();
  return (
    <div className="height-login">
      <BotonWhatsapp />
      <LoginForm />
      <Footer />
      </div>
  );
};

export default Login;