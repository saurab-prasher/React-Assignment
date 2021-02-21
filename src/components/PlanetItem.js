import React from "react";

const PlanetItem = ({ item, onPlanetSelect }) => {
  return (
    <div className="list-container">
      <li onClick={() => onPlanetSelect(item.name)}>{item.name}</li>
      <input type="checkbox" />
    </div>
  );
};
export default PlanetItem;
