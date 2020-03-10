import React from 'react';
import './Header.sass';
import Logo from '../atoms/logo.png';

const Header: React.FC = () => (
  <header className="Header">
    <img className="Header__logo" src={Logo} />
  </header>
);

export default Header;
