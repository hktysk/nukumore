import React from 'react';
import SearchForm from './SearchForm';
import RegisterButton from '../molecules/RegisterButton';
import Logo from '../atoms/logo.png';
import HamburgarMenu from '../molecules/HamburgarMenu';
import './Header.sass';
import './Header.media.sass';

const Header: React.FC = () => (
  <header className="Header">
    <div className="Header__hamburgerMenu">
      <HamburgarMenu />
    </div>
    <div className="Header__searchForm">
      <SearchForm />
    </div>
    <img
      className="Header__logo"
      src={Logo}
      alt="ロゴ"
    />
    <div className="Header__registerButton">
      <RegisterButton />
    </div>
  </header>
);

export default Header;
