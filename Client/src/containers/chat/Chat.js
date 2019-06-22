import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

Container.propTypes = {
  fluid: PropTypes.bool
};

const Chat = props => {
  return (
    <Container>
      <div>
        <div>
          <h1>Chat</h1>
          <hr />
        </div>
      </div>
    </Container>
  );
};

export default Chat;
