import React from 'react'
import Header from '../Header/Header'
import NewsCardList from '../NewsCardList/NewsCardList'
import About from '../About/About'
import Preloader from '../Preloader/Preloader'

const Main = ({handleSignInClick, handleSignOutClick, handleSearch}) => {
    return (
        <main className="main">
            <Header handleSignInClick={handleSignInClick} handleSignOutClick={handleSignOutClick} handleSearch={handleSearch} />
            <NewsCardList />
            <Preloader />
            <About />
        </main>
    )
}

export default Main