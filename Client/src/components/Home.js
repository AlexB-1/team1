import React from "react";
import crown from "../images/crown.jpeg";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};

const Home = props => {
  return (
    <div>
      <Container>
        <h1>Welcome to TracKing!</h1>
        <hr />
        <p>
          The Agile Project Management Application. &nbsp;
          <i>
            Please login or register for a free account today and begin using
            the App to manage your development projects.
          </i>
        </p>
        <div className="crownImage">
          <img src={crown} alt="crown" />
        </div>
      </Container>
    </div>
  );
};

export default Home;
