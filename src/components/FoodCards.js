import React from 'react';
import '../styles/FoodCards.css';

const FoodCardListContainer = ({
    p_searchedTerms
  }) => {
  return (
    <div className="food-card-list-container">
        <i>Add an item to find out when it will expire!</i>
        <p />

        { p_searchedTerms.map((term, index, array) => (
            <FoodCard p_id={term.id} p_itemName={term.item} p_index={index} p_length={array.length} />
          )) 
        }
    </div>
  );
}

const FoodCard = ({
  p_id,
  p_itemName,
  p_index,
  p_length
}) => {

  const imgUrl = `https://picsum.photos/50?random=${p_length - p_index}`;

  const counterLowerRange = Math.floor(Math.random() * 5);
  const counterUpperRange = Math.floor(Math.random() * 4) + 5;

  const FridgeRange = Math.floor(Math.random() * 11);

  const FreezerRange = Math.floor(Math.random() * 9) + 3;

  return (
    <div className="food-card">
      <div className="name-box">
        <img src={imgUrl} alt={p_itemName} />
        {p_id}. {p_itemName}
      </div>
      <div className="counter-life-box">
        <div>Counter Life:</div>
        <div>{counterLowerRange} - {counterUpperRange} hours</div>
      </div>
      <div className="fridge-life-box">
        <div>Fridge Life:</div>
        <div>{FridgeRange} days</div>
      </div>
      <div className="freezer-life-box">
        <div>Freezer Life:</div>
        <div>{FreezerRange} months</div>
      </div>
    </div>
  )
}

export default FoodCardListContainer;
