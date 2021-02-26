import React from "react";
import PlanetItem from "./PlanetItem";

const PlanetList = React.memo(({ list, onPlanetSelect, onAddToFavClick }) => {
  const renderedList = list.map((planet) => {
    return (
      <PlanetItem
        key={planet.id}
        onPlanetSelect={onPlanetSelect}
        onAddToFavClick={onAddToFavClick}
        planet={planet}
      />
    );
  });

  return <ul className="list">{renderedList}</ul>;
});

export default PlanetList;
