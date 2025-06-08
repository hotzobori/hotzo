import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import Logo from '../components/Logo';

const Join = () => {
  const [memberName, setMemberName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [alert, setAlert] = useState({ type: '', message: '' });
  const navigate = useNavigate();

  const showAlert = (type, message) => {
    setAlert({ type, message });
    setTimeout(() => setAlert({ type: '', message: '' }), 3000); // 3초 뒤 알림 사라짐
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (password !== confirmPassword) {
      window.alert('비밀번호가 일치하지 않습니다.');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          memberName,
          email,
          password,
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('memberId:', data.memberId);
  
      window.alert('Joined successfully!');
      navigate('/'); // 바로 이동
  
    } catch (error) {
      console.error('Join request failed:', error);
      window.alert('Something went wrong. Try again.');
    }
  };

  return (
    <main className="auth-container">
      <Logo />

      {alert.message && (
        <div className={`alert ${alert.type}`}>
          {alert.message}
        </div>
      )}

      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Username"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Join</button>
      </form>
    </main>
  );
};

export default Join;