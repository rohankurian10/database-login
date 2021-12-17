import "./Registration.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

const Registration = () => {
  let name = useRef("");
  let validation = (e) => {
    e.preventDefault();
    let namee = name.current.value;
    console.log(namee);
  };
  return (
    <div className="Registration">
      <form name="reg" className="Form-Container">
        <div className="Header-Container">
          <h1>Registration</h1>
        </div>
        <div className="Input-Container">
          <input ref={name} type="text" placeholder="name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <input type="password" placeholder="confirm password"></input>
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
