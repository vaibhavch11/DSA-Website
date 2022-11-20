import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "../Login/Login.scss"

const Login = () => {
  return (
    <div className="login">
      {/* <Navbar /> */}

        <div className="container">

          <div className="loginSection">
            <form>
                
              <div className="inputSection">
                <input type="text" name="name" placeholder="username" />
              </div>
              <div className="inputSection">
                <input type="text" name="name" placeholder="password" />
              </div>
              <div className="inputSection">
                <button className="submit" type="submit">Login</button>
              </div>
              
            </form>
          </div>

          <div className="signupSection">
            <div className="signupText">New User Signup</div>
            <div className="signupSocial">
              <div className="google social">google</div>
              <div className="facebook social">facebook</div>
              <div className="github social">github</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
