import React, { FC } from 'react';

interface FooterProps {
  // Define props here if needed
}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Nimful. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
