import React from "react";

const Favourites = ({ favPlanets, onRmFavClick }) => {
  const renderFavs = favPlanets.map((planet) => {
    return (
      <div key={planet.id}>
        <li className="fav-list">
          {planet.name}{" "}
          <button className="btn" onClick={() => onRmFavClick(planet)}>
            remove
          </button>
        </li>
      </div>
    );
  });
  return (
    <>
      <main>
        <h1 className="fav-heading">See Your Favourite Planets here</h1>
        <div className="fav-container">
          <ul className="list">{renderFavs}</ul>
        </div>
      </main>
    </>
  );
};

export default Favourites;
