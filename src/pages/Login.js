import React, { useState } from 'react';
import {UserService} from './../services/UserService';
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { LoginUser } = UserService();
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const  handleLogin = async (e) => {
    e.preventDefault();
    let loginModel = {email: email, password: password};
    var result =  await LoginUser(loginModel);
    if (result === true) {
      if (document.referrer === "") {
          navigate('/home');
      } else {
          return (navigate(-1));
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
