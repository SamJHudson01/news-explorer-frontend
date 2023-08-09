import React, { useEffect, useState } from 'react';
import { useContext } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { LoggedInContext } from '../../contexts/LoggedInContext'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { CurrentPageContext } from '../../contexts/CurrentPageContext'
import logoutIconSavedNews from '../../images/logout_saved-news.svg';
import logoutIconHome from '../../images/logout__home.svg';
import burgerHome from '../../images/burger_home.png';
import burgerSavedNews from '../../images/burger_saved-news.png';
import closeButton from '../../images/modal_close_button.png';

const Nav = ({ onSignInClick, onSignOutClick, isSavedNewsHeader }) => {
  const { isLoggedIn } = useContext(LoggedInContext);
  const { currentUser } = useContext(CurrentUserContext);
  const { currentPage } = useContext(CurrentPageContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOutClick = () => {
    onSignOutClick();
    toggleMenu();
  };

  useEffect(() => {
    setIsOpen(false);
  }, [isLoggedIn]);

  return (
    <div className={`nav ${isLoggedIn ? "nav_logged-in" : ""}`}>
      <h1 className="nav__heading">
      <Link to="/" className={`nav__heading-link ${isOpen ? "nav__heading-link_overlay" : ""}`}>NewsExplorer</Link>

      </h1>


      <button onClick={toggleMenu} className="nav__burger-btn">
        <img src={isSavedNewsHeader ? burgerSavedNews : burgerHome} alt="burger menu" className="nav__burger-icon" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div className="nav__overlay">
          <button onClick={toggleMenu} className="nav__overlay-close-btn">
            <img src={closeButton} alt="close button" className="nav__overlay-close-icon" />
          </button>
          {isLoggedIn ? (
            <>
              <Link to="/" className="nav__overlay-link">Home</Link>
              <Link to="/saved-news" className="nav__overlay-link">Saved articles</Link>
              <div className="nav__button-container">
                <button className={"nav__sign-out-button_logged-in nav__overlay-sign-out-btn"} onClick={handleSignOutClick}>
                  <p className="nav__sign-out-button-username">{currentUser}</p>
                  <img src={logoutIconHome} alt="" className="nav__sign-out-button-icon" />
                </button>
              </div>
            </>
          ) : (
            <>
              <Link to="/" className="nav__overlay-link">Home</Link>
              <div className="nav__button-container">
                <button onClick={onSignInClick} className="nav__sign-in-button nav__overlay-sign-in-btn">Sign in</button>
              </div>
            </>
          )}
        </div>
      )}

      <div className={`nav__group-right ${isLoggedIn ? "nav__group-right_logged-in" : ""}`}>
        <Link to="/" className={`nav__home-link ${isLoggedIn ? "nav__home-link_logged-in" : ""} ${currentPage === "/" ? "nav__home-link_current-page" : ""}`}>Home</Link>
        <Link to="/saved-news" className={`nav__saved-articles-link ${isLoggedIn ? "nav__saved-articles-link_logged-in" : ""} ${currentPage === "/saved-news" ? "nav__saved-articles-link_current-page" : ""}`}>Saved articles</Link>
        <button className={`nav__sign-in-button ${isLoggedIn ? "nav__sign-in-button_logged-in" : ""}`} onClick={onSignInClick}>Sign in</button>
        <button className={`nav__sign-out-button ${isLoggedIn ? "nav__sign-out-button_logged-in" : ""}`} onClick={onSignOutClick}>
          <p className="nav__sign-out-button-username">{currentUser}</p>
          <img src={(isSavedNewsHeader ? logoutIconSavedNews : logoutIconHome)} alt="" className="nav__sign-out-button-icon" />
        </button>
      </div>
    </div>
  );
}

export default Nav;
