import React from "react";
import {
  Segment,
  Image,
  Modal,
  Divider,
  Header,
} from "semantic-ui-react";
import Instructions from "./Instructions";
import blackFrost from "../blackfrost.png";
import { version } from "../constants";

const Footer = () => (
  <Segment
    vertical
    size="mini"
    style={{ background: "transparent", padding: "1rem", marginTop: "2rem" }}
  >
    <Instructions />
    <Modal
      trigger={<Image src={blackFrost} size="mini" floated="right" />}
      closeIcon
    >
      <Modal.Content>
        <Modal.Description>
          <Header>
            Dx2 Battle Speed Calculator {version}
            <Header.Subheader>
              A tool for Shin Megami Tensei Dx2 Liberation.
            </Header.Subheader>
          </Header>
          <Header sub>About</Header>
          <p>
            Calculates total battle speed of a party, based on demons' agility
            stat, the speed bonus on their brands, and the presence of the{" "}
            <a
              href="https://dx2wiki.com/index.php/Speedster"
              target="_blank"
              rel="noopener noreferrer"
            >
              Speedster
            </a>{" "}
            skill.
          </p>
          <Divider />
          <Header sub>Credits</Header>
          <p>
            App created by{" "}
            <a
              href="https://github.com/horselord"
              target="_blank"
              rel="noopener noreferrer"
            >
              horselord
            </a>
            <br />
            6★ Agility stats from{" "}
            <a
              href="https://dx2wiki.com/index.php/Demon_List"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dx2 Wiki
            </a>
          </p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    <p style={{ color: "#fef6d5", textAlign: "right" }}>
      Dx2 Battle Speed Calculator {version}
      <br />
      by{" "}
      <a
        style={{ color: "#fee202" }}
        href="https://github.com/horselord"
        target="_blank"
        rel="noopener noreferrer"
      >
        horselord
      </a>
    </p>
  </Segment>
);

export default Footer;
