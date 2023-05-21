import React, { FC, useState,useEffect } from 'react';

interface HeaderProps {
  // Define props here if needed
}

const Header: FC<HeaderProps> = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
      setIsLoggedIn(true);
    }
  }, []);
  
  
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setIsLoggedIn(false);
  };


  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Nimful 🌼</h1>
        <ul className="nav-links">
          <li>
            <a href="http://52.66.247.18:3000/">Home</a>
          </li>
          <li>|</li>
          <li>
            <a href="http://52.66.247.18:3000/about">About me</a>
          </li>
          {isLoggedIn ? (
            <>
              <li>|</li>
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </>
          ) : (
            <>
              <li>|</li>
              <li>
                <a href="http://52.66.247.18:3000/login">Login</a>
              </li>
              <li>|</li>
              <li>
                <a href="http://52.66.247.18:3000/signup">Signup</a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
