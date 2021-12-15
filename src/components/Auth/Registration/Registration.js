import "./Registration.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Registration = () => {
  let name = useRef();
  let email = useRef();
  let password = useRef();
  let confirmPassword = useRef();

  let nameValidator = () => {
    let name;
  };
  return (
    <div className="Registration">
      <form name="Registration" className="Form-Container">
        <div className="Header-Container">
          <h1>Registration</h1>
        </div>
        <div className="Input-Container">
          <input ref={name} type="text" placeholder="name"></input>
          <input ref={email} type="email" placeholder="email"></input>
          <input ref={password} type="password" placeholder="password"></input>
          <input
            ref={confirmPassword}
            type="password"
            placeholder="confirm password"
          ></input>
        </div>
        <div className="Button-Container">
          <button>REGISTER</button>
          <div>
            <Link to="/login">Already Registered? Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
