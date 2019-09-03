import React from "react";
import { Segment, Form } from "semantic-ui-react";

const Dx2Leader = ({ agBonus, onChange }) => (
  <Segment
    style={{
      background: "linear-gradient(45deg, #fcc700, #fee202)"
    }}
  >
    <Form size="mini">
      <Form.Input
        label="Set Dx2 Leader Ag Bonus"
        value={agBonus}
        onChange={onChange}
        type="number"
      />
    </Form>
  </Segment>
);

export default Dx2Leader;
