import "./Registration.css";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="Registration">
      <div className="Header-Container">
        <h1>Registration</h1>
      </div>
      <div className="Input-Container">
        <input type="text" placeholder="name"></input>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <input type="password" placeholder="confirm password"></input>
      </div>
      <div className="Button-Container">
        <button>REGISTER</button>
        <div>
          <Link to="/login">Already Registered? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
