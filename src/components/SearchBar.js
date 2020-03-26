import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = (
    {
      p_searchInput, 
      p_setSearchInputTo,
      p_handleAddSearchTerm
    }
  ) => {

  function keyPressed(event) {
    if(event.key === "Enter") {
      p_handleAddSearchTerm();
    }
  }
    
  return (
    <div className="search-bar-container">
      <input 
        type="text"
        id="search-input"
        placeholder="Seach Food Item Here . . . "
        value={p_searchInput}
        onChange={e => p_setSearchInputTo(e.target.value)}
        onKeyPress={keyPressed}
      />
      <button onClick={p_handleAddSearchTerm}>
        🔍
      </button>
    </div>
  );
}


export default SearchBar;
