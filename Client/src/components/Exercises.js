import React from "react";
import VideoPlayer from "./VideoPlayer";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};

const Exercises = props => {
  return (
    <Container>
      <div className="exercisePage">
        <h1>Strength Training Exercises</h1>
        <hr />
        <h4>Compound Multi-Joint Exercises:</h4>
        <ul>
          <li>Squat</li>
          <li>Deadlift</li>
          <li>Bench press </li>
          <li>Barbell rows</li>
          <li>Overhead press</li>
          <li>Incline bench press</li>
          <li>Close-grip bench press</li>
          <li>Romainian deadlift</li>
          <li>Pullups</li>
          <li>Dips</li>
        </ul>
        <h4>Accessary Exercises:</h4>
        <ul>
          <li>Barbell curl </li>
          <li>Tricep extension</li>
          <li>Straight-arm pull-downs</li>
          <li>Side lateral raise</li>
          <li>Rear delt fly</li>
          <li>Seated curl </li>
        </ul>
        <h4>Core Exercises:</h4>
        <ul>
          <li>Incine situp</li>
          <li>Leg raise</li>
          <li>Russian twist</li>
        </ul>
        <div className="videoPlayer">
          <VideoPlayer />
        </div>
      </div>
    </Container>
  );
};

export default Exercises;
