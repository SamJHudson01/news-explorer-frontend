import React, { useState, useContext } from 'react';
import './SearchForm.css';
import { CurrentKeywordContext } from '../../contexts/CurrentKeywordContext';

const SearchForm = ({handleSearch}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { setCurrentKeyword } = useContext(CurrentKeywordContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchQuery);
    setCurrentKeyword(searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" className="search-form__input" placeholder="Enter topic" onChange={handleInputChange} />
      <button type="submit" className="search-form__button">Search</button>
    </form>
  );
}

export default SearchForm;
