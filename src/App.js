import React, { useState, useEffect } from "react";
import { getDataTitle } from "./data/service";
import "./data/service";
import "./App.scss";
import "./styles/dropDownFilter.scss";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import DropdownMenu from "./components/DropDownFilter";
import DropdownMenuYear from "./components/DropDownYear";

function App() {
  const [state, setState] = useState({
    results: [],
  });
  const [type, setType] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeYear, setActiveYear] = useState("");
  const [reset, setResetState] = useState(false);
  useEffect(() => {
    document.title = "HubSpot Web Test";
  });

  useEffect(() => {
    setResetState(false);
  }, [activeSearch]);
  console.log(activeYear);

  const onSearch = async (text) => {
    const result = await getDataTitle(text);
    setActiveSearch(true);
    setState((prevState) => {
      return { ...prevState, results: result };
    });
  };

  const movieRadio = () => {
    setType("movie");
  };

  const bookRadio = () => {
    setType("book");
  };

  const resetFunction = () => {
    setActiveSearch(false);
    setActiveYear("");
    setType("");
    setResetState(true);
    document.getElementById("book").checked = false;
    document.getElementById("movie").checked = false;
  };

  return (
    <body>
      <div class="exercise-header">
        <h2>Exercise 1 - Testimonial Block</h2>
      </div>

      <div>
        <div>
          <div>
            <p>
              Gingerbread tart cupcake cake muffin cookie liquorice tiramisu.
              Toffee cupcake cake cake croissant icing carrot cake cookie.
              Dessert chocolate bar apple pie sesame snaps liquorice carrot cake
              cookie danish.
            </p>
            <span>Indiana Jones, Archaeologist</span>
          </div>
          <a>Tell Me More</a>
        </div>
      </div>

      <div class="exercise-header">
        <h2>Exercise 2 - Filterable Content</h2>
      </div>

      <div className="container">
        <div className="heading">
          <div className="filter">
            <div className="filter-menu">
              <DropdownMenu label="GENRE" />

              {/*} DropDown year{*/}
              <DropdownMenuYear label="YEAR" />
            </div>

            <div className="search">
              <SearchBar onSearch={onSearch} />
            </div>
          </div>

          <div className="header">
            <div className="radio-btn">
              <input
                type="radio"
                id="movie"
                name="media"
                value="movie"
                onChange={movieRadio}
              />
              <label className="radio-label" id="movieLabel" for="movie">
                Movies
              </label>
              <input
                type="radio"
                id="book"
                name="media"
                value="book"
                onChange={bookRadio}
              />
              <label className="radio-label" for="book">
                Books
              </label>
            </div>
          </div>
          <div className="clearFilter">
            <button className="clear-btn" type="button" onClick={resetFunction}>
              CLEAR FILTERS
            </button>
          </div>
        </div>
        <div className="movie-container">
          <CardList
            type={type}
            results={state.results}
            active={activeSearch}
            reset={reset}
          />
        </div>
      </div>
    </body>
  );
}

export default App;
