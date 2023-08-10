import NewsCard from '../NewsCard/NewsCard';
import { useEffect, useState } from 'react';
import './NewsCardList.css';
import { useContext } from 'react';
import nothingFound from '../../images/not-found_v1.svg';
import { SearchResultsContext } from '../../contexts/SearchResultsContext';
import { IsLoadingContext } from '../../contexts/IsLoadingContext';
import { HasSearchedContext } from '../../contexts/HasSearchedContext';

const NewsCardList = () => {
    const [numberVisible, setNumberVisible] = useState(3);
    const { searchResults } = useContext(SearchResultsContext);
    const { isLoading } = useContext(IsLoadingContext);
    const { hasSearched } = useContext(HasSearchedContext);
    
    return (
        !isLoading && hasSearched && searchResults.length === 0
            ?
            <section className='news-card-list_nothing-found'>
                <div className="news-card-list_nothing-found-container">
                    <img className='news-card-list_nothing-found-icon' src={nothingFound} alt="No Results" />
                    <h3 className="news-card-list_nothing-found-heading">
                        Nothing found
                    </h3>
                    <p className="news-card-list_nothing-found-subheading">Sorry, but nothing matched your search terms.</p>
                </div>
            </section>
            :
            <section className={`news-card-list ${searchResults?.length === 0 || isLoading ? 'news-card-list_empty' : ''}`}>
                <h2 className="news-card-list__heading">Search Results</h2>
                <div className="news-card-list__card-container">
                    {
                        searchResults?.slice(0, numberVisible).map(item => (
                            <NewsCard newsItem={item} key={item.url} />
                        ))
                    }
                </div>
                <button className='news-card-list__show-more-button' onClick={() => {
                    setNumberVisible(numberVisible + 3)
                }}>Show More</button>
            </section>
    )
}

export default NewsCardList;


