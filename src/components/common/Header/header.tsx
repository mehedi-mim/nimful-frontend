import React, { FC } from 'react';
interface HeaderProps {
  // Define props here if needed
}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Nimful 🌼</h1>
        <ul className="nav-links">
          <li><a href="http://52.66.247.18:3000/">Home</a></li>
          <li>|</li>
          <li><a href="http://52.66.247.18:3000/about">About me</a></li>
          <li>|</li>
          <li><a href="http://52.66.247.18:3000/login">Login</a></li>
          <li>|</li>
          <li><a href="http://52.66.247.18:3000/signup">Signup</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
