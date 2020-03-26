import React, { useState } from 'react';
import '../styles/App.css';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import FoodCardListContainer from './FoodCards';


function App() {

  const initialFoodItems = [
    { 
      id: 2,
      item: 'Jelly Beans' 
    },
    { 
      id: 1,
      item: 'Potato Chip' 
    },
    { 
      id: 0,
      item: 'Used Napkin' 
    }
  ]

  const [searchedTerms, modifySearchTerms] = useState(initialFoodItems);

  const [searchInput, setSearchInputTo] = useState('');

  const [foodItemIdCounter, incrementFoodItemId] = useState(searchedTerms.length);

  function getNextFoodId() {
    incrementFoodItemId(foodItemIdCounter + 1);
    return foodItemIdCounter;
  }

  function handleAddSearchTerm() {
    modifySearchTerms([
      { 
        id: getNextFoodId(),
        item: searchInput 
      },
      ...searchedTerms
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
      <FoodCardListContainer 
          p_searchedTerms={searchedTerms}/>
      <footer>
        <i><small>&copy; Copyright 2020 | Property of <b>Let's Hire Paul Dang LLC</b> - All Rights Reserved </small></i>
      </footer>
    </div>
  );
}

export default App;
