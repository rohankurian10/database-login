import "./Registration.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Registration = () => {
  let validation = () => {
    let name = reg.name.value;
  };

  return (
    <div className="Registration">
      <form name="reg" className="Form-Container">
        <div className="Header-Container">
          <h1>Registration</h1>
        </div>
        <div className="Input-Container">
          <input name="name" ref={name} type="text" placeholder="name"></input>
          <input
            name="email"
            ref={email}
            type="email"
            placeholder="email"
          ></input>
          <input
            name="password"
            ref={password}
            type="password"
            placeholder="password"
          ></input>
          <input
            ref={confirmPassword}
            type="password"
            placeholder="confirm password"
          ></input>
        </div>
        <div className="Button-Container">
          <button onClick={validation}>REGISTER</button>
          <div>
            <Link to="/login">Already Registered? Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
