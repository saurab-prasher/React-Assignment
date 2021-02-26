import React, { useEffect } from "react";

const PlanetItem = ({ planet, onPlanetSelect, onAddToFavClick }) => {
  return (
    <div className="list-container">
      <li onClick={() => onPlanetSelect(planet.name)}>{planet.name}</li>
      <div className="check-container">
        <button className="btn" onClick={() => onAddToFavClick(planet)}>
          like
        </button>
      </div>
    </div>
  );
};

export default PlanetItem;
