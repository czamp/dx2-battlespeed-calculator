import React from "react";
import { connect } from "react-redux";
import {
  updateAgility,
  updateBonus,
  toggleSpeedster,
  selectCompendiumDemon,
  setAgBonus,
    toggleHellsPark
} from "../actions";
import Party from "../components/Party";
import MenuItem from "../components/MenuItem";
import compendium from "../data/stats.json";

const mapStateToProps = (state, ownProps) => ({
  demons: state.demons,
  demonOptions: compendium.map(c => ({
    ...c,
    content: <MenuItem race={c.race} name={c.name} grade={c.grade} />,
    text: c.name,
    value: c.name,
    key: c.name
  })),
  agBonus: state.agBonus,
  hellsPark: state.hellsPark
});

const mapDispatchToProps = dispatch => ({
  updateAgility: (id, value) => dispatch(updateAgility(id, value)),
  updateBonus: (id, value) => dispatch(updateBonus(id, value)),
  toggleSpeedster: id => dispatch(toggleSpeedster(id)),
  onSelectChange: (id, cDemon) => dispatch(selectCompendiumDemon(id, cDemon)),
  onAgBonusChange: value => dispatch(setAgBonus(value)),
  toggleHellsPark: bool => dispatch(toggleHellsPark(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Party);
