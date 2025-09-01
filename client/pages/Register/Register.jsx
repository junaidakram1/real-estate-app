import React from "react";
import "./Register.scss";
const Register = () => {
  return (
    <div className="register">
      <div className="wrapper">
        <h1>Create an Account</h1>
        <form action="">
          <input name="email" type="text" placeholder="Email" />
          <input name="username" type="text" placeholder="Username" />
          <input name="password" type="password" placeholder="Password" />
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
