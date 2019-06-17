import React from "react";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};

const TrainingPrograms = props => {
  return (
    <Container>
      <div>
        <div>
          <h1>Training Programs</h1>
          <hr />
          <h5>Choose the right training program for your fitness level</h5>
          <p>
            The fitness options designed in this program are tailored to three
            distinct fitness levels:
          </p>
          <ul>
            <li>
              Novice level <i>(0 - 6 months of continuous training)</i>
            </li>
            <li>
              Intermediate level <i>(6 - 18 months of continuous training)</i>
            </li>
            <li>
              Adanced level <i>(18+ months of continuous training)</i>
            </li>
          </ul>
        </div>
        <div>
          <h5>Calculate your 1RM</h5>
          <p>
            Calculating your one rep maximum (1RM) is an important aspect of
            training. When you first begin, some experimenting will be required.
            Pick a weight that you believe you can complete no less than 6 reps
            and no more than 15 repetitions. The idea is to use a weight that is
            safe and appropriate for the desired effect, i.e. Strength or Size.
            It should be mentioned that in the beginning, in order to build
            muscle mass, strength gains must be achieved as well.
            <br />
            <br />
            Note: 1RM predicion source: Mayhew et al. [1RM (kg) = Rep*Wt/(0.522
            + 0.419 e^(–0.055 RTF))], where 1 RM = 1 repetition maximum; RepWt =
            repetition weight, a load less than 1RM used to perform repetitions;
            RTF = repetitions to fatigue.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default TrainingPrograms;
