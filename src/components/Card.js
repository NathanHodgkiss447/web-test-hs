import React, { useState, useEffect } from "react";
import "../styles/card.scss";
import "../data/service";
import { getAllData, getType } from "../data/service";

export default function Card({ type, results, active, reset }) {
  const [allMovie, setAllMovie] = useState([]);
  const [typeState, setTypeState] = useState([]);
  const [searchState, setSearchState] = useState(false);
  const [resetFilter, setResetState] = useState(false);
  let object = {};

  useEffect(() => {
    setResetState(reset);
  }, [reset]);

  useEffect(() => {
    setTypeState(type);
  }, [type]);

  useEffect(() => {
    setSearchState(active);
  }, [results]);

  useEffect(() => {
    if (typeState === "") {
      const fetchApi = async () => {
        setAllMovie(await getAllData());
      };
      fetchApi();
    } else {
      const fetchApi = async () => {
        setAllMovie(await getType(type));
      };
      fetchApi();
    }
  }, [typeState]);

  const movies = allMovie.map((item, index) => {
    return (
      <div className="resultCard" key={index}>
        <div className="card">
          <img className="img" src={item.poster} alt={item.title}></img>
          <h3>
            {item.title} ({item.year})
          </h3>
          <h4>
            Genres: {item.genre[0]}, {item.genre[1]}, {item.genre[2]}
          </h4>
        </div>
      </div>
    );
  });

  const searchMovies = results.map((item, index) => {
    return (
      <div className="resultCard" key={index}>
        <div className="card">
          <img className="img" src={item.poster} alt={item.title}></img>
          <h4>
            {item.title} ({item.year})
          </h4>
          <h5>
            Genres: {item.genre[0]}, {item.genre[1]}, {item.genre[2]}
          </h5>
        </div>
      </div>
    );
  });

  if (searchState === true && resetFilter === false) {
    object = searchMovies;
  } else {
    object = movies;
  }

  return <div className="container-movie">{object}</div>;
}
