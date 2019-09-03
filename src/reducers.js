import { combineReducers } from "redux";
import compendium from "./data/stats.json";

const initialState = [
  { id: 1, agility: 0, bonus: 0, speedster: false },
  { id: 2, agility: 0, bonus: 0, speedster: false },
  { id: 3, agility: 0, bonus: 0, speedster: false },
  { id: 4, agility: 0, bonus: 0, speedster: false },
  { id: 5, agility: 0, bonus: 0, speedster: false }
];

const demons = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_AGILITY":
      return state.map(demon =>
        demon.id === action.id ? { ...demon, agility: action.value } : demon
      );

    case "UPDATE_BONUS":
      return state.map(demon =>
        demon.id === action.id ? { ...demon, bonus: action.value } : demon
      );

    case "TOGGLE_SPEEDSTER":
      return state.map(demon =>
        demon.id === action.id
          ? { ...demon, speedster: !demon.speedster }
          : demon
      );

    case "SELECT_COMPENDIUM_DEMON":
      const refArray = compendium.filter(
        d => d.name.toLowerCase() === action.cDemon.name.toLowerCase()
      );
      const refDemon = refArray[0];

      return state.map(demon =>
        demon.id === action.id ? { ...demon, agility: refDemon.agility } : demon
      );

    case "TOGGLE_HELLS_PARK":
      return state.map(demon =>
        demon.id === 5 ? {...demon, agility: 0, speedster: false, bonus: 0} : demon
      )

    default:
      return state;

  }
};

const agBonus = (state = 0, action) => {
  switch (action.type) {
    case "SET_AG_BONUS":
      return action.value >= 0 ? action.value : 0;

    default:
      return state;
  }
};

const hellsPark = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_HELLS_PARK":
      return !state;
    default:
      return state;
  }
};

export default combineReducers({ demons, agBonus, hellsPark });
