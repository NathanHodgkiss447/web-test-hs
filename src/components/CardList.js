import React from "react";
import Card from "./Card";

export default function CardList({ results, type, active, reset }) {
  return (
    <div className="result">
      <Card type={type} results={results} active={active} reset={reset} />
    </div>
  );
}
