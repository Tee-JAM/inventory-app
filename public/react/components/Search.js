import React, { useState } from "react";
import apiURL from "../api";

export const Search = () => {
    const [foundItem, setFoundItem] = useState({});
    const [searchValue, setSearchValue] = useState("");
   

  async function handleSearchSubmit(e) {
    setFoundItem({});
    e.preventDefault();
    try {
      const itemKey = searchValue;
      const response = await fetch(`${apiURL}/items/search/${itemKey}`);
      const itemsData = await response.json();
      console.log(itemsData);
      setFoundItem(itemsData[0]);
      setSearchValue("");
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

//   const currency = foundItem.price.toFixed(2)

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      ></input>
      <button type="submit">Search</button>
      {foundItem.name == undefined ? (
        <>
        <br/>
        No Item Found
        </>
      ) : (
        <>
          <div className="container">
            <div className="item-details">
              <img
                className="image-size"
                src={foundItem.image}
                alt={foundItem.name}
              ></img>
              <h1 className="detail-info">{foundItem.name}</h1>
              <h2 className="detail-info">${foundItem.price}</h2>
              <p className="detail-info">{foundItem.category}</p>
              <p className="detail-info">{foundItem.description}</p>
            </div>
          </div>
        </>
      )}
    </form>
  );
};
