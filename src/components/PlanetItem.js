import React from "react";
import Heart from "./Heart";

const PlanetItem = ({ item, onPlanetSelect, onFavPlanetSelect }) => {
  return (
    <div className="list-container">
      <li onClick={() => onPlanetSelect(item.name)}>{item.name}</li>
      <input type="checkbox" onChange={(e) => onFavPlanetSelect(e, item)} />
    </div>
  );
};
export default PlanetItem;
