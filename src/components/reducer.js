const reducer = (state, action) => {
  if (action.type === "DATA_FETCHED") {
    return { ...state, planetList: action.payload };
  }
  if (action.type === "PLANET_SELECTED") {
    return { ...state, selectedPlanet: action.payload };
  }

  if (action.type === "ADD_TO_FAV") {
    const { planet, favPlanets } = action.payload;
    planet.isFavourite = true;
    const id = planet.id;

    if (favPlanets.some((planet) => planet.id === id)) {
      return {
        ...state,
        isModalOpen: true,
        modalContent: `${planet.name} Already in the favourite list`,
      };
    } else {
      favPlanets.push(planet);
      return {
        ...state,
        favPlanets,
        isModalOpen: true,
        modalContent: `${planet.name} Added to the favourite list`,
      };
    }
  }

  if (action.type === "REMOVE_FROM_FAV") {
    const { planet } = action.payload;
    const name = planet.name;
    planet.isFavourite = false;
    const updatedFav = state.favPlanets.filter(
      (planet) => planet.name !== name
    );
    return {
      ...state,
      favPlanets: updatedFav,
      isModalOpen: true,
      modalContent: `${planet.name} Removed from the favourite list`,
    };
  }

  return state;
};

export default reducer;
