import React, { useState } from 'react';
import "../Login/Login.scss"
import { signInWithGoogle } from '../Firebase/Firebase';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // TODO: send email and password to authentication backend
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="email" value={email} placeholder='E-mail Address' onChange={handleEmailChange} />
        </label>
        <label>
          <input type="password" value={password} placeholder='Password' onChange={handlePasswordChange} />
        </label>
        <button type="submit">Login</button>
        <button onClick={signInWithGoogle} className='SignIn'>SignIn With Google</button>

        <p>Don't have an account? <b>Register</b> now.</p>

        {/* <h1>{localStorage.getItem("name")}</h1>
      <h1>{localStorage.getItem("email")}</h1>
      <img src = {localStorage.getItem("profilePic")}/> */}

      </form>

    
    </div>
  );
}

export default LoginPage;


// import React from 'react'

// function Login() {
//   return (
//     <div className='Login'>
//       <button onClick={signInWithGoogle}>SignIn With Google</button>
//     </div>
//   );
// }

// export default Login
