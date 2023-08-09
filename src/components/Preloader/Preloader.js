import { useContext } from 'react'
import { IsLoadingContext } from '../../contexts/IsLoadingContext'
import './Preloader.css'

const Preloader = () => {
    const { isLoading } = useContext(IsLoadingContext)

    return (
        <div className={`preloader ${!isLoading ? 'preloader_hidden' : ''}`}>
            <i className="preloader__circle"></i>
            <p className="preloader__text">Searching for news...</p>
        </div>
    )
}

export default Preloader