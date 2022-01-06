/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Registration.css";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Registration = () => {
  let [nameValue, setNameValue] = useState("");

  const abc = useHistory();
  let name = useRef("");
  let email = useRef("");
  let password = useRef("");
  let confirmPassword = useRef("");
  // console.log("abcc email", email);

  let validation = async (e) => {
    e.preventDefault();
    let errCounter = 0;
    let nameValue = name.current.value.trim();
    let nameSplit = nameValue.split(" ");
    let firstName = nameSplit[0];
    let lastName = nameSplit[1];
    let emailValue = email.current.value;
    let passwordValue = password.current.value;
    let confirmPasswordValue = confirmPassword.current.value;
    // console.log(passwordValue, confirmPasswordValue);

    if (firstName.length > 10) {
      errCounter = errCounter + 1;
      console.log("name", errCounter);
    } else {
      // console.log(`First Name Validation Success`);
    }
    console.log(lastName);
    if (lastName === undefined) {
      errCounter = errCounter + 1;
      console.log(errCounter);
    } else if (lastName.length > 10) {
      errCounter = errCounter + 1;
      console.log("last name", errCounter);
    } else {
    }
    if (emailValue === "") {
      alert("Email cannout be empty");
      errCounter = errCounter + 1;
    } else if (emailValue.indexOf("@") < 0) {
      alert("Not a valid email address");
      errCounter = errCounter + 1;
    } else {
      // console.log("Email Validation Success");
    }
    if (passwordValue === "") {
      alert("Password cannot be empty");
      errCounter = errCounter + 1;
    } else if (passwordValue < 5) {
      alert("Too small password");
      errCounter = errCounter + 1;
    } else {
      // console.log(`Password validation Success`);
    }
    if (passwordValue === confirmPasswordValue) {
      console.log("Confirm password validation success");
      console.log(errCounter);
    } else {
      alert("Passwords do not match");
      errCounter = errCounter + 1;
    }

    if (errCounter === 0) {
      await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBntp0o7RNhCRWfA7TV4wJIH77fhfaLct4",
        {
          method: "POST",

          body: JSON.stringify({
            email: emailValue,
            password: passwordValue,
            returnSecureToken: true,
          }),

          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        // Converting to JSON
        .then((response) => response.json())

        // Displaying results to console
        .then((json) => console.log(json));

      abc.push("/login");
      return true;
    } else {
      return false;
    }
  };
  let nameVal = (e) => {
    setNameValue(e.target.value);
    // console.log(nameValue);
    if (nameValue === "") {
      console.log("Validation Failed");
    } else if (nameValue.indexOf("@") < 0) {
      console.log("Validation Failed");
    } else {
      console.log("Validation Success");
    }
  };
  let nameVal1 = () => {
    if (nameValue === "") {
      console.log("Validation Failed");
      return true;
    } else if (nameValue.indexOf("@") < 0) {
      console.log("Validation Failed");
      return true;
    } else {
      console.log("Validation Success");
    }
  };
  return (
    <div className="Registration">
      <form
        name="reg"
        className="Form-Container"
        onSubmit={validation}
        action="/login"
      >
        <div className="Header-Container">
          <h1>Registration</h1>
        </div>
        <div className="Input-Container">
          <input ref={name} type="text" placeholder="name"></input>
          <input
            className={
              nameVal1() && nameValue.length > 0 && "Input-Container-red"
            }
            onChange={(e) => nameVal(e)}
            ref={email}
            type="email"
            placeholder="email"
          ></input>
          <input ref={password} type="password" placeholder="password"></input>
          <input
            ref={confirmPassword}
            type="password"
            placeholder="confirm password"
          ></input>
        </div>
        <div className="Button-Container">
          <button type="submit">REGISTER</button>
          <div>
            <a onClick={() => abc.push("/login")}>Already Registered? Login</a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Registration;
