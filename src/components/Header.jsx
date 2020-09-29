import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => (
  <header className="header">
    <Link className="header__brand-link" to="/">
      <div className="header__brand">
        <img className="header__img" src={logo} alt="Logo Kosarica" />
        <h1 className="header__title--kosarica">KOSARICA</h1>
      </div>
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="User Icon" />
        <p className="profile-text">Perfil</p>
      </div>
    </div>
  </header>
);
export default Header;
