import React from "react";
import PlanetItem from "./PlanetItem";

const PlanetList = ({ list, onPlanetSelect }) => {
  const renderedList = list.map((item) => {
    return (
      <PlanetItem key={item.id} item={item} onPlanetSelect={onPlanetSelect} />
    );
  });

  return <ul className="list">{renderedList}</ul>;
};

export default PlanetList;
