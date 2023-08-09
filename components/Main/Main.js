import React from 'react'
import Header from '../Header/Header'
import NewsCardList from '../NewsCardList/NewsCardList'
import About from '../About/About'
import Preloader from '../Preloader/Preloader'

const Main = ({handleSignInClick, handleSignOutClick, handleSearch}) => {
    return (
        <div className="main">
            <Header handleSignInClick={handleSignInClick} handleSignOutClick={handleSignOutClick} handleSearch={handleSearch} />
            <NewsCardList />
            <Preloader />
            <About />
        </div>
    )
}

export default Main