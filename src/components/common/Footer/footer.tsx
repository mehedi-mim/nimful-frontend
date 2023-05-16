import React, { FC } from 'react';
import './footer.css';

interface FooterProps {
  // Define props here if needed
}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
