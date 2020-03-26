import React from 'react';
import '../styles/SearchBar.css';

function SearchBar() {

  return (
    <div className="search-bar-container">
      <input 
        type="text"
        id="search-input"
        placeholder="Seach Food Item Here . . . "
      />
      <button onClick={searchItem}>
        🔍
      </button>
    </div>
  );
}

function searchItem() {
  alert("Searching for broccoli ...");
}

export default SearchBar;
