import "./Registration.css";

const Registration = () => {
  return (
    <div className="Registration">
      <div className="Input-Container">
        <input type="text" placeholder="name"></input>
        <input type="email" placeholder="email"></input>
        <input type="password" placeholder="password"></input>
        <input type="password" placeholder="confirm password"></input>
      </div>
      <div className="Button-Container">
        <button>Register</button>
        <p>Already Registered? Login</p>
      </div>
    </div>
  );
};

export default Registration;
