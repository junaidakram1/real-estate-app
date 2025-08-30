import React from "react";
import "./Register.scss";
const Register = () => {
  return (
    <div className="register">
      <div className="wrapper">
        <h1>Create an Account</h1>
        <form action="">
          <input type="email" />
          <input type="text" />
          <input type="password" />
          <button>Register</button>{" "}
        </form>
      </div>{" "}
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Register;
