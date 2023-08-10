import React, { useState, useContext } from 'react';
import './SearchForm.css';
import { CurrentKeywordContext } from '../../contexts/CurrentKeywordContext';

const SearchForm = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const { setCurrentKeyword } = useContext(CurrentKeywordContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
      handleSearch(searchQuery);
      setCurrentKeyword(searchQuery);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.trim() === "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-form__input"
        placeholder="Enter topic"
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button
        type="submit"
        className={`search-form__button ${isFocused && disabled ? 'search-form__button_disabled' : ''}`}
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
