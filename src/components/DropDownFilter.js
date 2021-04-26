import React, { useState, useRef, useEffect } from "react";
import { getAllGenre } from "../data/service";
import "../styles/dropDownFilter.scss";

export default function DropdownMenu({ label, items }) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [listGenre, setListGenreState] = useState([]);
  const [genre, setGenreState] = useState("");
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
    const fetchList = async () => {
      setListGenreState(await getAllGenre());
    };
    fetchList();
  }, []);

  const dropDownLabels = listGenre.map((item, index) => {
    return (
      <ul>
        <li className="yearFilter" key={index}>
          <input
            className="menu-button"
            type="checkbox"
            onClick={() => {
              setGenreState(item);
            }}
          ></input>
          {item.toUpperCase()}
        </li>
      </ul>
    );
  });

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>{label}</span>
        <img
          className="menu-arrow"
          src="https://cdn.iconscout.com/icon/free/png-256/keyboard-down-arrow-1780093-1518654.png"
          alt="arrow"
        ></img>
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        {dropDownLabels}
      </nav>
    </div>
  );
}
