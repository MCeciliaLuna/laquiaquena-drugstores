import LoginForm from "../../Components/LoginForm/LoginForm";
import "./Login.css";

const Login = () => {
  sessionStorage.clear();
  return (
    <div className="height-login">
      <LoginForm />
    </div>
  );
};

export default Login;
