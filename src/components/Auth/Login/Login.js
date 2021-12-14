import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="Login">
      <div className="Header-Container">
        <h1>Login</h1>
      </div>
      <div className="Input-Container">
        <input placeholder="email" type="email"></input>
        <input placeholder="password" type="password"></input>
      </div>
      <div className="Button-Container">
        <button>LOGIN</button>
        <div>
          <Link to="/registration">Not Registered? Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
