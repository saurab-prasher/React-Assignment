import { render } from "@testing-library/react";
import React from "react";

const Favourites = ({ favPlanets }) => {
  console.log(favPlanets);

  const renderFavPlanents = favPlanets.map((planet) => {
    return <div key={planet.id}>{planet.name}</div>;
  });
  return <h1>{renderFavPlanents}</h1>;
};

export default Favourites;
