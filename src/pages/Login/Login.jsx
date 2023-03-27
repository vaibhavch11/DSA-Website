import React from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import "../Login/Login.scss"
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  let navigate= useNavigate()
  const newSignup= () =>{
    let path='/newUser'
    
    navigate(path)
  }
 
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
                <input type="password" name="name" placeholder="password" />
              </div>
              <div className="inputSection">
                <button className="submit" type="submit">Login</button>
              </div>
              
            </form>
          </div>

          <div className="signupSection">
            <div className="signupText">
              
                <button className="new-user-button" onClick={newSignup}>New User Signup</button>
                
                </div>
              
             
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
