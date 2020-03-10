import React from 'react';
import SearchForm from './SearchForm';
import './Header.sass';
import Logo from '../atoms/logo.png';

const Header: React.FC = () => (
  <header className="Header">
    <div className="Header__searchForm">
      <SearchForm />
    </div>
    <img className="Header__logo" src={Logo} />
  </header>
);

export default Header;
