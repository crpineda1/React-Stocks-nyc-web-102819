import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={(event) => {props.setSortBy(event.target)}}/>
        Alphabetically
 
        <input type="radio" value="Price" checked={null} onChange={(event) => {props.setSortBy(event.target)}}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => {props.setFilter(event.target)}}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
