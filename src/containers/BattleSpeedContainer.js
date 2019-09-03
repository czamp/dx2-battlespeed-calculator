import { connect } from "react-redux";
import BattleSpeed from "../components/BattleSpeed";

const getDemonSpeed = demon => {
  if (demon.speedster) {
    return Math.floor(demon.agility * (1.5 + demon.bonus / 100));
  } else {
    return Math.floor(demon.agility * (1 + demon.bonus / 100));
  }
};

const totalSpeed = demons =>
  getDemonSpeed(demons[0]) +
  getDemonSpeed(demons[1]) +
  getDemonSpeed(demons[2]) +
  getDemonSpeed(demons[3]) +
  getDemonSpeed(demons[4]);

const activeDemons = demons => demons.filter(demon => demon.agility > 0);
const demonCount = demons => activeDemons(demons).length;

const calcBattleSpeed = demons => {
  return Math.floor(totalSpeed(demons) * (100 / demonCount(demons)));
};

const leaderBonus = ag => 100 * ag;

const mapStateToProps = state => ({
  battleSpeed: calcBattleSpeed(state.demons) + leaderBonus(state.agBonus)
});

export default connect(mapStateToProps)(BattleSpeed);

// ag bonus
// x = ag bonus
// final battle speed = calculated + (x * 100)
