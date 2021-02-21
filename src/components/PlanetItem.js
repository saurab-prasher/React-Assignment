import React from "react";
import Heart from "./Heart";

const PlanetItem = ({ item, onPlanetSelect }) => {
  return (
    <div className="list-container">
      <li onClick={() => onPlanetSelect(item.name)}>{item.name}</li>
      <input
        type="checkbox"
        onChange={() => console.log("Input changed", item.name)}
      />
    </div>
  );
};
export default PlanetItem;
