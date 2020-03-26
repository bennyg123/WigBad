import React from 'react';
import '../styles/App.css';

import NavBar from './NavBar';
import SearchBar from './SearchBar';
import FoodCardListContainer from './FoodCards';


function App() {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <FoodCardListContainer />
    </div>
  );
}

export default App;
