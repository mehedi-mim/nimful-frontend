import React, { FC } from 'react';
interface HeaderProps {
  // Define props here if needed
}

const Header: FC<HeaderProps> = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Nimful</h1>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About me</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Signup</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
