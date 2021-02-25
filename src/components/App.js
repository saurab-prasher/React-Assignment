import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import PlanetList from "./PlanetList";
import PlanetDetail from "./PlanetDetail";
import Favourites from "./Favorites";
import Navbar from "./Navbar";
import Modal from "./Modal";
import planets from "../data";

const App = () => {
  const [list, setList] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [favPlanet, setFavPlanet] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    const api = async () => {
      const response = await axios.get(
        "https://assignment-machstatz.herokuapp.com/planet"
      );
      setList(response.data);
    };
    api();
  }, []);

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

    if (favPlanet.some((item) => item.id === id)) {
      setIsModalOpen(true);
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

  console.log(favPlanet);
  const onRmFavClick = (planet) => {
    console.log("remove button working");
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
            <section className="section">
              {isModalOpen ? <Modal modalContent={modalContent} /> : null}
              <div className="container">
                <PlanetList
                  list={list}
                  onPlanetSelect={onPlanetSelect}
                  favPlanet={favPlanet}
                  onAddToFavClick={onAddToFavClick}
                />
                <PlanetDetail selectedPlanet={selectedPlanet} />
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
