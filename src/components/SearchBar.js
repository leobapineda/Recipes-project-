import React from "react";

function SearchBar({ hanbleSubmit, handleChange, food }) {
  return (
    <form onSubmit={hanbleSubmit}>
      <label id="food">Choose food</label>
      <input
        type="text"
        name="food input"
        placeholder="Find a recipe"
        className="form--input"
        onChange={handleChange}
        defaultValue={food}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchBar;
