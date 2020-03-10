import React from 'react';
import './SearchForm.sass';

const SearchForm: React.FC = () => (
  <form className="SearchForm">
    <input
      className="SearchForm__text"
      type="search"
      placeholder="気になるワード"
    />
    <input
      className="SearchForm__submit material-icons"
      type="submit"
      value="search"
    />
  </form>
);

export default SearchForm;
