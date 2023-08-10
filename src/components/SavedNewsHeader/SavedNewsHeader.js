import React from 'react'
import { useContext } from 'react'
import './SavedNewsHeader.css'
import Nav from '../Nav/Nav'
import { CurrentUserContext } from '../../contexts/CurrentUserContext'
import { SavedCardsContext } from '../../contexts/SavedCardsContext'
import { SavedKeywordsContext } from '../../contexts/SavedKeywordsContext'
import { getKeywordsDisplay } from '../../utils/getKeywordsDisplay'



const SavedNewsHeader = ({ handleSignInClick, handleSignOutClick }) => {
    const { currentUser } = useContext(CurrentUserContext);
    const { savedCards } = useContext(SavedCardsContext);
    const { savedKeywords } = useContext(SavedKeywordsContext);
    const keywordsDisplay = getKeywordsDisplay(savedKeywords);

    return (
        <header className="saved-news-header">
            <Nav onSignInClick={handleSignInClick} onSignOutClick={handleSignOutClick} isSavedNewsHeader={true} />
            <div className="saved-news-header__content">
                <h2 className="saved-news-header__heading">
                    Saved Articles
                </h2>
                <h3 className="saved-news-header__subheading">
                    {currentUser}, you have {savedCards.length} saved {savedCards.length === 1 ? 'article' : 'articles'}
                </h3>
                <p className='saved-news-header__keywords'>By keywords: <span className='saved-news-header__keywords-bold'>{keywordsDisplay}</span></p>
            </div>
        </header>
    )
}

export default SavedNewsHeader