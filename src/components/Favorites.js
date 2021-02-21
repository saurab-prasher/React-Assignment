import React from "react";

const Favourites = ({ favPlanets }) => {
  const renderFavs = favPlanets.map((planet) => {
    return (
      <div key={planet.id}>
        <li>{planet.name}</li>
      </div>
    );
  });
  return <div>{renderFavs}</div>;
};

export default Favourites;
