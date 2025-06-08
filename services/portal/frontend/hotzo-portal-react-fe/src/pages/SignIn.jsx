import React from 'react';
import './auth.css';
import Logo from '../components/Logo';

const Login = () => {
  return (
    <main className="auth-container">
      <Logo />

      <form className="auth-form">
        <h2>Sign In</h2>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
