import React from "react";

const PlanetList = ({ list, onPlanetSelect, onFavPlanetSelect }) => {
  const renderedList = list.map((item) => {
    return (
      <div key={item.id} className="list-container">
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
  });

  return <ul className="list">{renderedList}</ul>;
};

export default PlanetList;
