import React, { useEffect } from "react";
import data from "../data";
import "../planetDetail.css";

const PlanetDetail = ({ selectedPlanet }) => {
  const renderPlanet = data
    .filter((planet) => {
      return planet.name === selectedPlanet;
    })
    .map((planet) => {
      return (
        <div className="planet-container" key={planet.id}>
          <img src={planet.image} alt={planet.name} />
          <div className="planet-info">
            <h2>{planet.name}</h2>
            <div className="underline"></div>
            <p>{planet.description}</p>
          </div>
        </div>
      );
    });

  return renderPlanet.length ? (
    <>{renderPlanet}</>
  ) : (
    "Click to see your planets"
  );
};

export default PlanetDetail;
