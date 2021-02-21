import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

import PlanetList from "./PlanetList";
import PlanetDetail from "./PlanetDetail";
import Favourites from "./Favorites";
import Navbar from "./Navbar";

const App = () => {
  const [list, setList] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [favPlanet, setFavPlanet] = useState([]);

  useEffect(() => {
    const api = async () => {
      const response = await axios.get(
        "https://assignment-machstatz.herokuapp.com/planet"
      );
      setList(response.data);
    };
    api();
  }, []);

  const onFavPlanetSelect = (e, planet) => {
    const id = planet.id;
    if (e.target.checked) {
      setFavPlanet((oldArray) => [
        ...oldArray,
        { id: planet.id, isFavourite: e.target.checked, name: planet.name },
      ]);
    }

    const updateList = list.map((planet) => {
      if (planet.id === id) {
        return {
          id: planet.id,
          isFavourite: e.target.checked,
          name: planet.name,
        };
      } else {
        return planet;
      }
    });

    setList(updateList);

    if (!e.target.checked) {
      const name = planet.name;
      const removePlanet = favPlanet.filter((planet) => planet.name !== name);
      setFavPlanet(removePlanet);
    }
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
              <div className="container">
                <PlanetList
                  onFavPlanetSelect={onFavPlanetSelect}
                  list={list}
                  onPlanetSelect={onPlanetSelect}
                  favPlanet={favPlanet}
                />
                <PlanetDetail selectedPlanet={selectedPlanet} />
              </div>
            </section>
          </main>
        </Route>

        <Route
          path="/favourites"
          render={() => (
            <Favourites
              favPlanets={favPlanet}
              onFavPlanetSelect={onFavPlanetSelect}
            />
          )}
        />
      </Router>
    </>
  );
};

export default App;
