import React from 'react'
import './Header.css'
import Nav from '../Nav/Nav'
import SearchForm from '../SearchForm/SearchForm'



const Header = ({handleSignInClick, handleSignOutClick, handleSearch}) => {
  
    
  return (
    <header className='header'>
        <Nav onSignInClick={handleSignInClick} onSignOutClick={handleSignOutClick}/>
        <div className="header__content">
            <h1 className="header__title">What's going on in the world?</h1>
            <p className="header__description">Find the latest news on any topic and save them in your personal account.</p>
            <SearchForm handleSearch={handleSearch}/>
        </div>
    </header>
  )
}

export default Header