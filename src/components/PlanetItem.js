import React from "react";

const PlanetItem = ({ item, onPlanetSelect, onFavPlanetSelect }) => {
  return (
    <div className="list-container">
      <li onClick={() => onPlanetSelect(item.name)}>{item.name}</li>
      <input
        type="checkbox"
        defaultChecked={item.isFavourite}
        onChange={(e) => {
          onFavPlanetSelect(e, item);
        }}
      />
    </div>
  );
};
export default PlanetItem;
