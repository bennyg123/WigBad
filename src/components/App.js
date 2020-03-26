import React, { useState } from 'react';
import '../styles/App.css';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import FoodCardListContainer from './FoodCards';


function App() {

  const initialFoodItems = [
    { item: 'Jelly Beans' },
    { item: 'Potato Chip' },
    { item: 'Used Napkin' }
  ]

  const [searchedTerms, addSearchTerm] = useState(initialFoodItems);

  const [searchInput, setSearchInputTo] = useState('');

  function handleAddSearchTerm() {
    addSearchTerm([
      ...searchedTerms,
      { item: searchInput }
    ]);

    setSearchInputTo('');
  }

  return (
    <div className="App">
      <NavBar />
      <SearchBar 
          p_searchInput={searchInput} 
          p_setSearchInputTo={setSearchInputTo}
          p_handleAddSearchTerm={handleAddSearchTerm}
          />
      <FoodCardListContainer />
      
      <div style={{marginTop: "50px", padding: "15px"}}>
        Searched Terms:
        <div style={{border: "1px solid black", borderRadius: "8px", padding: "10px", margin: "10px"}}>
          {searchedTerms.map(term => <li>{term.item}</li>)}
        </div>
      </div>

    </div>
  );
}

export default App;
