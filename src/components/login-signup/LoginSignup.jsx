import React, { useState } from "react";

import "./LoginSignup.css";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="container">
      <div className="header">
        <div className="text"> {action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src="/person.png" alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src="/email.png" alt="" />
          <input type="Email" placeholder="Email/Phone number" />
        </div>
        <div className="input">
          <img src="/password.png" alt="" />
          <input type="Password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot password? <span>Click here!</span>
        </div>
      )}

      <div className="submit-container">
        <div
          className={action === "Login" ? "Submit gray" : "Submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "Submit gray" : "Submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
