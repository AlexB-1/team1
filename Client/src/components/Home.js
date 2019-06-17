import React from "react";
import gymImage from "../images/15428190060701082885942.jpg";
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
        <h1>Welcome to the Strength Training App!</h1>
        <hr />
        <p>
          This application is designed to introduce the novice lifter to the
          types of exercises, training programs and nutrition required to build
          a foundation in strength and add muscle mass. &nbsp;
          <i>
            Please login or register for a free account today and begin using
            the App to create your own personalized workout plan and track your
            progress.
          </i>
        </p>
        <div className="gymImage">
          <img src={gymImage} alt="gymImage" />
        </div>
        <br />
        <p>
          <i>
            The Content contained within this application is not intended to be
            a substitute for professional medical advice, diagnosis, or
            treatment. Always seek the advice of your physician or other
            qualified health provider prior to beginning an exercise routine, or
            with any questions you may have regarding preexisting medical
            conditions.
          </i>
        </p>
      </Container>
    </div>
  );
};

export default Home;
