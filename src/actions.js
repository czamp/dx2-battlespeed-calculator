export const updateAgility = (id, value) => ({
  type: "UPDATE_AGILITY",
  value,
  id
});

export const updateBonus = (id, value) => ({
  type: "UPDATE_BONUS",
  value,
  id
});

export const toggleSpeedster = id => ({
  type: "TOGGLE_SPEEDSTER",
  id
});

export const selectCompendiumDemon = (id, cDemon) => ({
  type: "SELECT_COMPENDIUM_DEMON",
  id,
  cDemon
});

export const setAgBonus = value => ({
  type: "SET_AG_BONUS",
  value
});

export const toggleHellsPark = () => ({
  type: "TOGGLE_HELLS_PARK"
});
