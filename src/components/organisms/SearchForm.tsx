import React from 'react';
import './SearchForm.sass';

const SearchForm: React.FC = () => (
  <form className="SearchForm">
    <input
      className="SearchForm__submit material-icons"
      type="submit"
      value="search"
    />
    <input
      className="SearchForm__text"
      type="search"
      placeholder="いま何を食べたい？"
    />
  </form>
);

export default SearchForm;
