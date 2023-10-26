import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import getUsers from '../../api/users';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log('Error retrieving the users list', error);
      });
  }, []);

  const handleUsername = (user) => {
    setUsername(user.target.value);
  };

  const handlePassword = (pass) => {
    setPassword(pass.target.value);
  };

  const handleLogin = () => {
    const userFound = users.find(
      (user) =>
        user.username === username && user.password === password,
    );

    const notify = () => {
      toast.error('Incorrect username or password!', {
        position: toast.POSITION.TOP_CENTER,
      });
    };

    if (userFound) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      navigate('/');
    } else {
      notify();
    }
  };

  return (
    <div className="login-container">
      <div className="login-container__border">
        <h1 className="login-title">Login</h1>
        <div className="input-container">
          <input
            value={username}
            type="text"
            placeholder="Username"
            onChange={handleUsername}
          />
          <input
            value={password}
            type="password"
            placeholder="Password"
            onChange={handlePassword}
          />
        </div>
        <div className="button-container">
          <button className="login-button" onClick={handleLogin}>
            Log in
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
