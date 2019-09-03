import React from "react";
import { Modal, Header, Divider, Segment } from "semantic-ui-react";
import ChangelogItem from "./ChangelogItem";
import messages from "../messages.js";
import { version, gradients } from "../constants";

class WelcomeMessage extends React.Component {
  state = { modalOpen: false };

  componentWillMount() {
    if (localStorage.getItem("version") !== version) {
      this.setState(
        {
          modalOpen: true
        },
        () => localStorage.setItem("version", version)
      );
    }
  }

  handleClose = () => {
    this.setState({
      modalOpen: false
    });
  };

  render() {
    const { modalOpen } = this.state;
    return (
      <Modal
        as={Segment}
        closeIcon
        dimmer="blurring"
        inverted
        onClose={this.handleClose}
        open={modalOpen}
        size="large"
        style={{
          background: gradients.blue
        }}
      >
        <Header
          inverted
          style={{
            background: "transparent"
          }}
        >
          {messages.welcomeTitle}
        </Header>

        <Modal.Content style={{ background: "transparent" }}>
          <Modal.Description>
            <Header inverted>New in {version}:</Header>
            <ChangelogItem changes={messages[version]} />
            <Divider />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default WelcomeMessage;
