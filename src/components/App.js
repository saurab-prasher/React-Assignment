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
    if (e.target.checked) {
      setFavPlanet((oldArray) => [
        ...oldArray,
        { id: planet.id, isFavourite: !planet.isFavourite, name: planet.name },
      ]);
    }
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
                />
                <PlanetDetail selectedPlanet={selectedPlanet} />
              </div>
            </section>
          </main>
        </Route>

        <Route
          path="/favourites"
          render={() => <Favourites favPlanets={favPlanet} />}
        />
      </Router>
    </>
  );
};

export default App;
