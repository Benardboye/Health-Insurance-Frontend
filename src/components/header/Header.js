import React, { useState } from 'react';
import './header.scss';
import { images } from '../../images';
import { Link } from 'react-router-dom';
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleLogout = () => {
    localStorage.clear()
    window.location.href="/"
  }

  const isLoggedIn = localStorage.getItem('signature');
  const user = localStorage.getItem('user');

  return (
    <header>
      <nav className="navbar container">
        <div className="logo">
          <Link to={'/'}>
            <img src={images.logo} alt="" />
          </Link>
            <span className="lg"><sup>+</sup></span>
        </div>
        <div className='nav-items-div'>

              <ul className={open ? `nav-items active` : `nav-items`}>
                    <li className="navbarLi">About</li>
                    {isLoggedIn ? (
                      user
                    ) : (
                      <li className="navbarLi">
                        
                      </li>
                    )}
                    {isLoggedIn ? (
                      <li className="navbarLi">
                      <Link to="/" onClick={handleLogout}>Logout</Link>
                      </li>
                    ) : (
                      <li className="navbarLi">
                        <Link to="/login">Login</Link>
                      </li>
                    )}
              </ul>
        </div>
        <div className="hamburger">
          <img src={images.hamburger} onClick={handleClick} alt="" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
