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
    <Grid doubling stackable>
      <Grid.Row columns={hellsPark ? 5 : 4}>
          <Grid.Column key={demons[0].id}>
            <Demon
              {...demons[0]}
              onAgChange={e => updateAgility(demons[0].id, e.target.value)}
              onBonusChange={e => updateBonus(demons[0].id, e.target.value)}
              onToggle={() => toggleSpeedster(demons[0].id)}
              onSelectChange={e => onSelectChange(demons[0].id, { name: e.value })}
              demonOptions={demonOptions}
            />
          </Grid.Column>
        <Grid.Column key={demons[1].id}>
          <Demon
              {...demons[1]}
              onAgChange={e => updateAgility(demons[1].id, e.target.value)}
              onBonusChange={e => updateBonus(demons[1].id, e.target.value)}
              onToggle={() => toggleSpeedster(demons[1].id)}
              onSelectChange={e => onSelectChange(demons[1].id, { name: e.value })}
              demonOptions={demonOptions}
          />
        </Grid.Column>
        <Grid.Column key={demons[2].id}>
          <Demon
              {...demons[2]}
              onAgChange={e => updateAgility(demons[2].id, e.target.value)}
              onBonusChange={e => updateBonus(demons[2].id, e.target.value)}
              onToggle={() => toggleSpeedster(demons[2].id)}
              onSelectChange={e => onSelectChange(demons[2].id, { name: e.value })}
              demonOptions={demonOptions}
          />
        </Grid.Column>
        <Grid.Column key={demons[3].id}>
          <Demon
              {...demons[3]}
              onAgChange={e => updateAgility(demons[3].id, e.target.value)}
              onBonusChange={e => updateBonus(demons[3].id, e.target.value)}
              onToggle={() => toggleSpeedster(demons[3].id)}
              onSelectChange={e => onSelectChange(demons[3].id, { name: e.value })}
              demonOptions={demonOptions}
          />
        </Grid.Column>
        {hellsPark &&
        <Grid.Column key={demons[4].id}>
          <Demon
              {...demons[4]}
              onAgChange={e => updateAgility(demons[4].id, e.target.value)}
              onBonusChange={e => updateBonus(demons[4].id, e.target.value)}
              onToggle={() => toggleSpeedster(demons[4].id)}
              onSelectChange={e => onSelectChange(demons[4].id, { name: e.value })}
              demonOptions={demonOptions}
          />
        </Grid.Column>
        }
      </Grid.Row>
      <Grid.Row columns={2}>
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
