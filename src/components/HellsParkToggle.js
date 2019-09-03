import React from 'react';
import {Segment, Form} from 'semantic-ui-react';

const HellsParkToggle = ({onToggle, hellsPark}) => (
    <Segment style={{background: "linear-gradient(45deg, #fcc700, #fee202)"}}>
      <Form size={"mini"}>
        <Form.Input label={"(Experimental) Hell's Park Mode"}>
        <Form.Checkbox
            label={"Enables 5th Party Slot"}
            toggle
            checked={hellsPark}
            name="hellsPark"
            onChange={onToggle}
        />
        </Form.Input>
      </Form>
    </Segment>
);

export default HellsParkToggle;
