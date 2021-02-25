import React from "react";

const PlanetList = ({
  list,
  onPlanetSelect,
  onFavPlanetSelect,
  onAddToFavClick,
}) => {
  const renderedList = list.map((item) => {
    return (
      <div key={item.id} className="list-container">
        <li onClick={() => onPlanetSelect(item.name)}>{item.name}</li>
        <div className="check-container">
          <button className="btn" onClick={() => onAddToFavClick(item)}>
            like
          </button>
        </div>
      </div>
    );
  });

  return <ul className="list">{renderedList}</ul>;
};

export default PlanetList;
