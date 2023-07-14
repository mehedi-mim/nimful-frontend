import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {

  const [showLabel, setShowLabel] = useState(false);



  const [username, setUserName] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobile, setPhoneNumber] = useState('');

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      window.location.href = '/';
    }
  }, []);

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault();

    // Create a signup data object
    if (password !== confirmPassword) {
      toast.error('Confirm password not matched!');
      return;
    }



    const signupData = {
      username,
      first_name,
      last_name,
      email,
      password,
      mobile
    };

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/api/v1/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signupData)
      });

      if (response.ok) {
        // Signup successful
        const data = await response.text();
        toast.success(data);
        window.location.href = '/login';

      } else {
        // Signup failed
        const errorData = await response.json();
        toast.error(errorData.detail);
      }
    } catch (error) {
      toast.error('An error occurred');
    }
  };

  return (

    <div>
      <h2>🖊️ Signup</h2>
      <form onSubmit={handleSignup}>
        <section className="label">
          Username</section>
        <input
          type="text"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <section className='label'>First Name</section>
        <input
          type="text"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <section className='label'>Last Name</section>

        <input
          type="text"
          value={last_name}
          onChange={(e) => setSurname(e.target.value)}
        />
        <section className='label'>Email</section>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <section className='label'>Password</section>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <section className='label'>Confirm Password</section>

        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
