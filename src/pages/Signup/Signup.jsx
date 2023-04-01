// import React from 'react'
import "../Signup/Signup.scss"
import React, { useState } from 'react';

function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  async function handleSignup(event) {
    event.preventDefault();

    try {
      // Use your own signup API endpoint or library
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
      }

      const { user } = await response.json();
      console.log('User created:', user.email);
    } catch (error) {
      setError(error.message);
      console.error(error);
    }
  }

  return (
    <div className="signup-page">
      <h2>Sign up</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignup}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}

export default SignupPage;
