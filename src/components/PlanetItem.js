import React from "react";
import { useGlobalContext } from "../context";

const PlanetItem = ({ planet }) => {
  const { onPlanetSelect, addToFav, favPlanet } = useGlobalContext();
  return (
    <div className="list-container">
      <li onClick={() => onPlanetSelect(planet)}>{planet.name}</li>
      <div className="check-container">
        <button className="btn" onClick={() => addToFav(planet, favPlanet)}>
          like
        </button>
      </div>
    </div>
  );
};

export default PlanetItem;
