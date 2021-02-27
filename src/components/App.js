import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useGlobalContext } from "../context";

import PlanetList from "./PlanetList";
import PlanetDetail from "./PlanetDetail";
import Favourites from "./Favorites";
import Navbar from "./Navbar";
import Modal from "./Modal";

const App = () => {
  const { isModalOpen } = useGlobalContext();
  return (
    <>
      <Router>
        <Navbar />
        {isModalOpen && <Modal />}
        <Route path="/" exact>
          <main>
            <section className="section">
              <div className="container">
                <PlanetList />
                <PlanetDetail />
              </div>
            </section>
          </main>
        </Route>
        <Route path="/favourites" exact>
          <Favourites />
        </Route>
      </Router>
    </>
  );
};
export default App;
