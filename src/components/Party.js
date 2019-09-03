import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "semantic-ui-react";
import Demon from "./Demon";
import Dx2Leader from "./Dx2Leader";
import HellsParkToggle from './HellsParkToggle';

const Party = ({
  demons,
  updateAgility,
  updateBonus,
  toggleSpeedster,
  onSelectChange,
  demonOptions,
  agBonus,
  onAgBonusChange,
  hellsPark, toggleHellsPark
}) => (
  <Container>
    <Grid columns={hellsPark ? 5 : 4} doubling stackable>
      <Grid.Row>
        {demons.map(demon => (
          <Grid.Column key={demon.id}>
            <Demon
              {...demon}
              onAgChange={e => updateAgility(demon.id, e.target.value)}
              onBonusChange={e => updateBonus(demon.id, e.target.value)}
              onToggle={() => toggleSpeedster(demon.id)}
              onSelectChange={e => onSelectChange(demon.id, { name: e.value })}
              demonOptions={demonOptions}
            />
          </Grid.Column>
        ))}
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Dx2Leader
            agBonus={agBonus}
            onChange={e => onAgBonusChange(e.target.value)}
          />
        </Grid.Column>
        {/*Hells Park Toggle*/}
        <Grid.Column>
          <HellsParkToggle
              hellsPark={hellsPark}
              onToggle={toggleHellsPark}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

Party.propTypes = {
  demons: PropTypes.array.isRequired,
  updateAgility: PropTypes.func.isRequired,
  updateBonus: PropTypes.func.isRequired,
  toggleSpeedster: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  demonOptions: PropTypes.array.isRequired
};

export default Party;
