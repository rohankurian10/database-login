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
        <button>REGISTER</button>
        <div>
          <a href="/login">Already Registered? Login</a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
