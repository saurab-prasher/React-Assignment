import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./components/reducer";

// KovYCFZ0AQZzU1ybV67XslQK1IJq5Y5UxKV5aG2p

const AppContext = React.createContext();

const initialState = {
  planetList: [],
  selectedPlanet: {},
  favPlanets: [],
  isModalOpen: false,
  modalContent: "",
};

const url = "https://assignment-machstatz.herokuapp.com/planet";

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPlanets = async () => {
    const response = await fetch(url);
    const data = await response.json();
    dispatch({ type: "DATA_FETCHED", payload: data });
  };

  useEffect(() => {
    getPlanets();
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     state.isModalOpen = !state.isModalOpen;
  //   }, 2000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [state.isModalOpen]);

  const addToFav = (planet) => {
    dispatch({
      type: "ADD_TO_FAV",
      payload: { planet, favPlanets: state.favPlanets },
    });
  };

  const removeFromFav = (planet) => {
    dispatch({ type: "REMOVE_FROM_FAV", payload: { planet } });
  };

  const onPlanetSelect = (planet) => {
    dispatch({ type: "PLANET_SELECTED", payload: planet });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        addToFav,
        removeFromFav,
        onPlanetSelect,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
