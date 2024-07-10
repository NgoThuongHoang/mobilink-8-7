import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search products..."
      />
    </div>
  );
};

export default SearchBar;
