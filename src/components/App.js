import React, { useEffect, useState } from "react";
import axios from "axios";
import Heart from "./Heart";
import PlanetList from "./PlanetList";
import PlanetDetail from "./PlanetDetail";

const App = () => {
  const [list, setList] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  useEffect(() => {
    const api = async () => {
      const response = await axios.get(
        "https://assignment-machstatz.herokuapp.com/planet"
      );
      setList(response.data);
    };
    api();
  }, []);

  const onPlanetSelect = (name) => {
    setSelectedPlanet(name);
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#home">Favorites</a>
          </li>
        </ul>
      </nav>
      <main>
        <section className="section">
          <div className="container">
            <PlanetList list={list} onPlanetSelect={onPlanetSelect} />
            <PlanetDetail selectedPlanet={selectedPlanet} />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
