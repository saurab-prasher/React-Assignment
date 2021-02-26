import React, { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { useFetch } from "./useFetch";

import PlanetList from "./PlanetList";
import PlanetDetail from "./PlanetDetail";
import Favourites from "./Favorites";
import Navbar from "./Navbar";
import Modal from "./Modal";

const url = "https://assignment-machstatz.herokuapp.com/planet";

const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [favPlanet, setFavPlanet] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const { list } = useFetch(url);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [isModalOpen]);

  const onAddToFavClick = (planet) => {
    const id = planet.id;
    setIsModalOpen(true);
    setModalContent(`${planet.name} added to favourite list`);

    if (favPlanet.some((planet) => planet.id === id)) {
      setModalContent(`${planet.name} Already in the favourite list`);
    } else {
      setFavPlanet((oldArray) => {
        return [
          ...oldArray,
          { id: planet.id, isFavourite: true, name: planet.name },
        ];
      });
    }
  };
  const onRmFavClick = (planet) => {
    const name = planet.name;
    const removePlanet = favPlanet.filter((planet) => planet.name !== name);
    setFavPlanet(removePlanet);
  };

  const onPlanetSelect = (name) => {
    setSelectedPlanet(name);
  };

  return (
    <>
      <Router>
        <Navbar />
        <Route path="/" exact>
          <main>
            {isModalOpen && <Modal modalContent={modalContent} />}
            <section className="section">
              <div className="container">
                <PlanetList
                  list={list}
                  onPlanetSelect={onPlanetSelect}
                  onAddToFavClick={onAddToFavClick}
                />
                {selectedPlanet && (
                  <PlanetDetail selectedPlanet={selectedPlanet} />
                )}
              </div>
            </section>
          </main>
        </Route>
        <Route
          path="/favourites"
          render={() => (
            <Favourites favPlanets={favPlanet} onRmFavClick={onRmFavClick} />
          )}
        />
      </Router>
    </>
  );
};
export default App;
