import React from "react";
import "./login.css"
const Login = () => {
  return (
    <>
      <div className="login">
        <div className="text">
          <h1>Store Login</h1>
        </div>
        <div className="input">
          <input type="email" placeholder="Email Address" className="input1" /><br/>
          <input type="password" placeholder="Password"  className="input2"/>
        </div>
        <div className="side">
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" checked disabled/>
        <label class="form-check-label" for="flexRadioCheckedDisabled">
          Disabled checked radio
        </label>
      </div>
          <div className="forget">
            <p>Forgot Password?</p>
          </div>
        </div >
        <button className="btn_data">login</button>
      </div>
    </>
  );
};

export default Login;
