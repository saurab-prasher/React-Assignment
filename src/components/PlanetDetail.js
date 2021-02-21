import React from "react";
import data from "../data";
import "../planetDetail.css";

const PlanetDetail = ({ selectedPlanet }) => {
  const filterPlanet = data.filter((planet) => {
    return planet.name === selectedPlanet;
  });

  const renderPlanet = filterPlanet.map((planet) => {
    return (
      <React.Fragment key={planet.position}>
        <div className="planet-container">
          <img src={planet.image} alt={planet.name} />
          <div className="planet-info">
            <h2>{planet.name}</h2>
            <div className="underline"></div>
            <p>{planet.description}</p>
          </div>
        </div>
      </React.Fragment>
    );
  });

  return (
    <>
      {renderPlanet.length ? (
        <>{renderPlanet} </>
      ) : (
        <h1>Click to see Info about each planet </h1>
      )}
    </>
  );
};

export default PlanetDetail;
