import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({ email, password });
    setEmail("");
    setPassword("");
  };

  return(
    <main className="login">
      <h1 className="loginTitle">Log in to your account</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          type="text"
          name="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type='password'
          name='password'
          id='password'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginBtn">Sign In</button>
        <p>
          No account?  <Link to='/register'>Create One</Link>
        </p>
      </form>
    </main>
  );
}

export default Login;