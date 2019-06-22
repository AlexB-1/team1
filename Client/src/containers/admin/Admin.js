import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

Container.propTypes = {
  fluid: PropTypes.bool
};

const Admin = props => {
  return (
    <div>
      <Container>
        <h1>Admin Page</h1>
        <hr />
        <div>
          <p>View/Edit Projects;</p>
        </div>
        <div>
          <p>View/Edit Users</p>
        </div>
        <div>
          <p>View/Edit Spints;</p>
        </div>
      </Container>
    </div>
  );
};

export default Admin;
