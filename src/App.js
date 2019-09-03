import React from "react";
import Banner from "./components/Banner";
import PartyContainer from "./containers/PartyContainer";
import BattleSpeedContainer from "./containers/BattleSpeedContainer";
import Footer from "./components/Footer";
import { Container, Segment, Divider } from "semantic-ui-react";

const App = () => (
  <div
    style={{
      background: "linear-gradient(to bottom, #c8445c, #6138c7)",
      height: "100%",
      minHeight: "100vh"
    }}
  >
    <Banner />
    <Container>
      <Segment
        style={{ background: "linear-gradient(45deg, #216a78, #184653)" }}
      >
        <PartyContainer />
      </Segment>
      <BattleSpeedContainer />
      <Divider />
      <Footer />
    </Container>
  </div>
);

export default App;
