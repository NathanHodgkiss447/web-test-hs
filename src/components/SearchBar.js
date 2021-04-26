import React, { useState } from "react";
import { getDataTitle } from "../data/service";
import "../styles/searchBar.scss";

function SearchBar(props) {
  const { onSearch } = props;
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    setSearchText(text);
  };

  const handleEnterKeyPressed = async (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <div>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder=""
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          value={searchText}
        ></input>
      </div>
    </div>
  );
}

export default SearchBar;
