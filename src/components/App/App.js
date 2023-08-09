
import { useState, useEffect } from 'react';
import Footer from '../Footer/Footer';
import SignInForm from '../SignInModal/SignInModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import { getNewsData } from '../../utils/thirdPartyApi';
import { LoggedInContext } from '../../contexts/LoggedInContext';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { SavedCardsContext } from '../../contexts/SavedCardsContext';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SavedNews from '../SavedNews/SavedNews';
import { SearchResultsContext } from '../../contexts/SearchResultsContext';
import { CurrentPageContext } from '../../contexts/CurrentPageContext';
import { IsLoadingContext } from '../../contexts/IsLoadingContext';
import { HasSearchedContext } from '../../contexts/HasSearchedContext';
import { CurrentKeywordContext } from '../../contexts/CurrentKeywordContext';
import { SavedKeywordsContext } from '../../contexts/SavedKeywordsContext';
import Main from '../Main/Main';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';




function App() {
  const [openModal, setOpenModal] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('TestUser');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [savedCards, setSavedCards] = useState([]);
  const [currentPage, setCurrentPage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [savedKeywords, setSavedKeywords] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location.pathname]);

  const handleSignInClick = () => {
    setOpenModal('signin');

  }

  useEffect(() => {
    if (!isLoggedIn && location.pathname !== '/') {
      navigate('/');
    }
  }, [isLoggedIn, location.pathname, navigate]);

  const getData = (searchTerm) => {
    setIsLoading(true);
    const newsArticles = getNewsData(searchTerm)
    newsArticles.then(data => {
      setHasSearched(true);
      setSearchResults(data.articles)
      console.log(data)
      setIsLoading(false);
    })

  }

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeAllModals();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };

  }, []);

  const handleLogIn = () => {
    setIsLoggedIn(true);
  }

  const handleLogOut = () => {
    setIsLoggedIn(false);
    navigate('/');
    setSearchResults([]);
    setHasSearched(false);
    setSavedCards([]);
  }

  const handleRegisterClick = () => {
    setOpenModal('register');

  }

  const handleRegister = () => {
    console.log('register')
    setOpenModal("success");
}

  useEffect(() => {
    console.log(openModal)
  }, [openModal])

  const closeAllModals = () => {
    setOpenModal('');
  }




  return (

    <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <SearchResultsContext.Provider value={{ searchResults, setSearchResults }}>
          <SavedCardsContext.Provider value={{ savedCards, setSavedCards }}>
            <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
              <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
                <HasSearchedContext.Provider value={{ hasSearched, setHasSearched }}>
                  <CurrentKeywordContext.Provider value={{ currentKeyword, setCurrentKeyword }}>
                    <SavedKeywordsContext.Provider value={{ savedKeywords, setSavedKeywords }}>
                      <div className="app">
                        <Routes>
                          <Route path="/" element={
                            <>
                              <Main handleSignInClick={handleSignInClick} handleSignOutClick={handleLogOut} handleSearch={getData} />
                            </>
                          } />
                          <Route path="/saved-news" element={
                            <>
                              <SavedNewsHeader handleSignInClick={handleSignInClick} handleSignOutClick={handleLogOut} />
                              <SavedNews />
                            </>
                          } />
                        </Routes>

                        <Footer />
                        {openModal === 'signin' && (
                          <SignInForm onClose={closeAllModals}
                            onSignUpClick={handleRegisterClick}
                            onLogin={handleLogIn} />)}
                        {openModal === 'register' && (
                          <RegisterModal onClose={closeAllModals}
                            onSigninClick={handleSignInClick}
                            onRegisterClick={handleRegister} />)}
                        {openModal === 'success' && (
                          <ConfirmationModal onClose={closeAllModals} onSigninClick={handleSignInClick}/>)}
                      </div>
                    </SavedKeywordsContext.Provider>
                  </CurrentKeywordContext.Provider>
                </HasSearchedContext.Provider>
              </IsLoadingContext.Provider>
            </CurrentPageContext.Provider>
          </SavedCardsContext.Provider>
        </SearchResultsContext.Provider>
      </CurrentUserContext.Provider>
    </LoggedInContext.Provider>
  );
}

export default App;
