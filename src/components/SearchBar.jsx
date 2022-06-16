import React from "react";
import "../stylesheet/SearchBar.css";
import lupa from "../images/icons/lupa.svg";

function SearchBar({ hanbleSubmit, handleChange, food }) {
  return (
    <form className="searh__container" onSubmit={hanbleSubmit}>
      <button className="search__btn">
        <img src={lupa} />
      </button>
      <input
        type="text"
        name="food input"
        placeholder="Find a recipe"
        className="search__input"
        onChange={handleChange}
        defaultValue={food}
      />
    </form>
  );
}

export default SearchBar;
