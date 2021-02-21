import React from "react";
import PlanetItem from "./PlanetItem";

const PlanetList = ({ list, onPlanetSelect, onFavPlanetSelect }) => {
  const renderedList = list.map((item) => {
    return (
      <PlanetItem
        key={item.id}
        item={item}
        onPlanetSelect={onPlanetSelect}
        onFavPlanetSelect={onFavPlanetSelect}
      />
    );
  });

  return <ul className="list">{renderedList}</ul>;
};

export default PlanetList;
