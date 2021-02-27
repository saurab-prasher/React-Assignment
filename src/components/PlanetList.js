import React from "react";
import PlanetItem from "./PlanetItem";
import { useGlobalContext } from "../context";

const PlanetList = React.memo(() => {
  const { planetList } = useGlobalContext();
  const renderedList = planetList.map((planet) => {
    return <PlanetItem key={planet.id} planet={planet} />;
  });

  return <ul className="list">{renderedList}</ul>;
});

export default PlanetList;
