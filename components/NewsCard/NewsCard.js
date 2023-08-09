import React, { useContext, useState } from 'react';
import './NewsCard.css';
import { SavedCardsContext } from '../../contexts/SavedCardsContext';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { CurrentPageContext } from '../../contexts/CurrentPageContext';
import { CurrentKeywordContext } from '../../contexts/CurrentKeywordContext';
import { SavedKeywordsContext } from '../../contexts/SavedKeywordsContext';
import binIcon from '../../images/bin.png';
import binIconHovered from '../../images/bin_hover.png';

const NewsCard = ({ newsItem }) => {
    const { publishedAt, title, source, urlToImage, description } = newsItem;
    const { savedCards, setSavedCards } = useContext(SavedCardsContext);
    const { isLoggedIn } = useContext(LoggedInContext);
    const { currentKeyword } = useContext(CurrentKeywordContext);
    const { savedKeywords, setSavedKeywords } = useContext(SavedKeywordsContext);
    const { currentPage } = useContext(CurrentPageContext);
    const isCardSaved = savedCards.some(card => card.title === title);
    const [isHovered, setIsHovered] = useState(false);

    const handleSaveButtonClick = () => {
        if (isCardSaved) {
            const card = savedCards.find(card => card.title === title);
            const newSavedCards = savedCards.filter(card => card.title !== title);
            setSavedCards(newSavedCards);
            const isKeywordStillInUse = newSavedCards.some(otherCard => otherCard.savedKeyword === card.savedKeyword);
            if (!isKeywordStillInUse) {
                setSavedKeywords(savedKeywords.filter(keyword => keyword !== card.savedKeyword));
            }
                
        } else {
            setSavedCards([...savedCards, { ...newsItem, savedKeyword: currentKeyword.charAt(0).toUpperCase() + currentKeyword.slice(1) }]);
            if (!savedKeywords.includes(currentKeyword.charAt(0).toUpperCase() + currentKeyword.slice(1))) {
                setSavedKeywords([...savedKeywords, currentKeyword.charAt(0).toUpperCase() + currentKeyword.slice(1)]);
            }
        }
    }

    return (
        <div className="news-card">
            <img
                src={urlToImage ? urlToImage : "https://cdnsm5-ss12.sharpschool.com/UserFiles/Servers/Server_921695/Image/News%20Images/news-2444778_1920.jpg"}
                alt={title}
                className="news-card__image"
            />
            {currentPage === '/saved-news' &&
                <div className="news-card__keyword">
                    {isCardSaved ? savedCards.find(card => card.title === title).savedKeyword : currentKeyword}
                </div>
            }
            <article className='news-card__content'>
                <p className="news-card__date">
                    {
                        new Date(publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })
                    }
                </p>
                <h2 className="news-card__title">{title}</h2>
                <p className="news-card__body">{description}</p>
                <p className="news-card__publication">{source.name}</p>
            </article>
            <div className='news-card__save-button-container'>
                {currentPage === '/saved-news' ? (
                    <img
                        src={isHovered ? binIconHovered : binIcon}
                        alt="delete-icon"
                        className="news-card__bin-icon"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handleSaveButtonClick}
                    />
                ) : (
                    <button
                        className={isCardSaved ? "news-card__save-button_checked" : "news-card__save-button_unchecked"}
                        onClick={handleSaveButtonClick}
                        disabled={!isLoggedIn}
                    />
                )}
                {!isLoggedIn && currentPage !== '/saved-news' && (
                    <div className='news-card__save-button-overlay'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                )}
            </div>
            {isHovered && !isLoggedIn && currentPage !== '/saved-news' ?
                <div className="news-card__hover-div">Sign in to save articles</div>
                : null}
            {isHovered && isLoggedIn && currentPage === '/saved-news' ?
                <div className="news-card__hover-div">Remove from saved</div>
                : null}
        </div>
    );
};

export default NewsCard;
