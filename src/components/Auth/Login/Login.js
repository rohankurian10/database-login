import "./Login.css";

const Login = () => {
  return (
    <div className="Login">
      <div className="Input-Container">
        <input placeholder="email" type="email"></input>
        <input placeholder="password" type="password"></input>
      </div>
      <div className="Button-Container">
        <button>LOGIN</button>
      </div>
    </div>
  );
};

export default Login;
