import React from "react";

const PlanetList = ({ list, onPlanetSelect, onFavPlanetSelect }) => {
  const renderedList = list.map((item) => {
    return (
      <div key={item.id} className="list-container">
        <li onClick={() => onPlanetSelect(item.name)}>{item.name}</li>
        <div className="check-container">
          <p>Add to Fav</p>
          <input
            id="check"
            type="checkbox"
            defaultChecked={item.isFavourite}
            onChange={(e) => {
              onFavPlanetSelect(e, item);
            }}
          />
        </div>
      </div>
    );
  });

  return <ul className="list">{renderedList}</ul>;
};

export default PlanetList;
