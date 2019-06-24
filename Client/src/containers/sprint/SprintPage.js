import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

Container.propTypes = {
  fluid: PropTypes.bool
};

const SprintPage = props => {
  return (
    <Container>
      <div>
        <h1>Sprint</h1>
        <hr />
      </div>
    </Container>
  );
};

export default SprintPage;
