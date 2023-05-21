import React, { useState ,useEffect} from 'react';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {

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
      window.location.href = 'http://52.66.247.18:3000/';
    }
  }, []);

  const handleSignup = async (e:React.FormEvent<HTMLFormElement>) => {
    
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
      const response = await fetch('http://localhost:8080/api/v1/signup', {
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
        window.location.href = 'http://52.66.247.18:3000/login'; 
        
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
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => setSurname(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={mobile}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
