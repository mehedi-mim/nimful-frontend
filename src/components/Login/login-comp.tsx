import React, { useState,useEffect  } from 'react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      window.location.href = '/';
    }
  }, []);



  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = {
      email,
      password,
    };
    
    try {
      // Perform login logic
      const response = await fetch('http://52.66.247.18:8080/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });

      if (response.ok) {
        const success_data = await response.json();
        localStorage.setItem('access_token', success_data.access_token);
        toast.success('Login successful');
        window.location.href = '/'; // Redirect to the Home page
      } else {
        toast.error('Login failed');
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };


  return (
    <div>
      <h2>🔐 Login</h2>
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
