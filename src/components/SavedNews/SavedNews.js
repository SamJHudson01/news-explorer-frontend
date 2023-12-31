import { useContext } from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { SavedCardsContext } from '../../contexts/SavedCardsContext';

import './SavedNews.css';



const NewsCardList = () => {
    const { savedCards } = useContext(SavedCardsContext);
    
    return (
        <section className='saved-news'>
            <div className="saved-news__card-container">
                {
                    savedCards?.map(item => (
                        <NewsCard newsItem={item} key={item.url} />
                    ))
                }

            </div>

        </section>
    )
}

export default NewsCardList