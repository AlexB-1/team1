import React, { Component } from "react";
import TableNovice from "./tables/TableNovice";
import TableIntermediate from "./tables/TableIntermediate";
import TableAdvanced from "./tables/TableAdvanced";
import { Container } from "reactstrap";
import PropTypes from "prop-types";

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};

class CreateProgram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Fitness Level Radio
      level: "",

      // Hide 1RM Calc ->until fitness level selected
      showMe_1_RepMax: false,

      // Hide Table ->until fitness level selected
      showMeTable: false,

      // Bench Press 1RM data
      bp_weight: 0,
      bp_reps: 0,
      bp_max1: 0,

      // Row 1RM data
      row_weight: 0,
      row_reps: 0,
      row_max1: 0,

      // Military Press 1RM data
      oh_weight: 0,
      oh_reps: 0,
      oh_max1: 0,

      // Squat 1RM data
      sq_weight: 0,
      sq_reps: 0,
      sq_max1: 0,

      // Deadlift 1RM data
      dl_weight: 0,
      dl_reps: 0,
      dl_max1: 0
    };
  }

  // Handlers for fitness level radio buttons ---------------------------------------------------
  handleChangeLevel = event => {
    this.setState({
      level: event.target.value
    });
  };

  handleSubmitLevel = event => {
    event.preventDefault();
    let fitLevel = this.state.level;

    if (fitLevel === "") {
      alert("please make a selection");
      this.setState({
        showMe_1_RepMax: false,
        showMeTable: false
      });
    } else {
      this.setState({
        showMe_1_RepMax: true,
        showMeTable: true
      });
    }
  };

  // ----------- Handlers & methods for 1 Rep Max Calculation tool -----------------------------

  // Bench Press
  handleChange_bp_weight = event => {
    // console.log(event.target.value);
    this.setState({ bp_weight: Number(event.target.value) });
  };
  handleChange_bp_reps = event => {
    // console.log(event.target.value);
    this.setState({ bp_reps: Number(event.target.value) });
  };
  // Barbell Row
  handleChange_row_weight = event => {
    // console.log(event.target.value);
    this.setState({ row_weight: Number(event.target.value) });
  };
  handleChange_row_reps = event => {
    // console.log(event.target.value);
    this.setState({ row_reps: Number(event.target.value) });
  };
  // Overhead Press
  handleChange_oh_weight = event => {
    // console.log(event.target.value);
    this.setState({ oh_weight: Number(event.target.value) });
  };
  handleChange_oh_reps = event => {
    // console.log(event.target.value);
    this.setState({ oh_reps: Number(event.target.value) });
  };
  // Squat
  handleChange_sq_weight = event => {
    // console.log(event.target.value);
    this.setState({ sq_weight: Number(event.target.value) });
  };
  handleChange_sq_reps = event => {
    // console.log(event.target.value);
    this.setState({ sq_reps: Number(event.target.value) });
  };
  // Deadlift
  handleChange_dl_weight = event => {
    // console.log(event.target.value);
    this.setState({ dl_weight: Number(event.target.value) });
  };
  handleChange_dl_reps = event => {
    // console.log(event.target.value);
    this.setState({ dl_reps: Number(event.target.value) });
  };
  //-----------------------------------------------------------------------------------------------

  // Bench Press - One Rep Max Formula: Mayhew et al.
  calc_bp_1RM = () => {
    let x = Math.ceil(
      (100 * this.state.bp_weight) /
        (52.2 + 41.9 * Math.E ** (-0.055 * this.state.bp_reps))
    );
    this.setState({ bp_max1: x });
  };
  // Barbell Row - One Rep Max Formula: Mayhew et al.
  calc_row_1RM = () => {
    let x = Math.ceil(
      (100 * this.state.row_weight) /
        (52.2 + 41.9 * Math.E ** (-0.055 * this.state.row_reps))
    );
    this.setState({ row_max1: x });
  };
  // Overhead Press - One Rep Max Formula: Mayhew et al.
  calc_oh_1RM = () => {
    let x = Math.ceil(
      (100 * this.state.oh_weight) /
        (52.2 + 41.9 * Math.E ** (-0.055 * this.state.oh_reps))
    );
    this.setState({ oh_max1: x });
  };
  // Squat - One Rep Max Formula: Mayhew et al.
  calc_sq_1RM = () => {
    let x = Math.ceil(
      (100 * this.state.sq_weight) /
        (52.2 + 41.9 * Math.E ** (-0.055 * this.state.sq_reps))
    );
    this.setState({ sq_max1: x });
  };
  // Deadlift - One Rep Max Formula: Mayhew et al.
  calc_dl_1RM = () => {
    let x = Math.ceil(
      (100 * this.state.dl_weight) /
        (52.2 + 41.9 * Math.E ** (-0.055 * this.state.dl_reps))
    );
    this.setState({ dl_max1: x });
  };

  // Method to display table depending on fitness level -------------------------------------------
  renderTableOption() {
    let fitLevel = this.state.level;

    if (fitLevel === "novice") {
      return (
        <TableNovice
          bp_max1={this.state.bp_max1}
          row_max1={this.state.row_max1}
          oh_max1={this.state.oh_max1}
          sq_max1={this.state.sq_max1}
          dl_max1={this.state.dl_max1}
        />
      );
    } else if (fitLevel === "intermediate") {
      return (
        <TableIntermediate
          bp_max1={this.state.bp_max1}
          row_max1={this.state.row_max1}
          oh_max1={this.state.oh_max1}
          sq_max1={this.state.sq_max1}
          dl_max1={this.state.dl_max1}
        />
      );
    } else {
      return (
        <TableAdvanced
          bp_max1={this.state.bp_max1}
          row_max1={this.state.row_max1}
          oh_max1={this.state.oh_max1}
          sq_max1={this.state.sq_max1}
          dl_max1={this.state.dl_max1}
        />
      );
    }
  }

  render() {
    return (
      <Container>
        <div>
          <div>
            <h1>Create Your Personal Training Program</h1>
            <hr />
          </div>

          <div>
            <form onSubmit={this.handleSubmitLevel}>
              <br />
              <h5>Select your fitness level:</h5>
              <p>{this.props.data}</p>
              <ul className="fitnessLevel">
                <li>
                  <label>
                    <input
                      type="radio"
                      name="fitnessLevel"
                      value="novice"
                      checked={this.state.level === "novice"}
                      onChange={this.handleChangeLevel}
                    />
                    Novice
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="fitnessLevel"
                      value="intermediate"
                      checked={this.state.level === "intermediate"}
                      onChange={this.handleChangeLevel}
                    />
                    Intermediate
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="fitnessLevel"
                      value="advanced"
                      checked={this.state.level === "advanced"}
                      onChange={this.handleChangeLevel}
                    />
                    Advanced
                  </label>
                </li>
              </ul>
              <button className="btn btn-primary my-2 my-sm-0" type="submit">
                Enter your selection
              </button>
            </form>
          </div>

          <Container>
            {this.state.showMe_1_RepMax ? (
              <div>
                <br />
                <br />
                <h5>Calculate your 1 Rep Max Values to Update the Table:</h5>

                <form className="oneRep">
                  <br />
                  <h6>Bench Press:</h6>
                  <label>
                    <input
                      type="number"
                      name="bp_weight"
                      onChange={this.handleChange_bp_weight}
                    />
                    Weight:
                  </label>
                  <label>
                    <input
                      type="number"
                      name="bp_reps"
                      onChange={this.handleChange_bp_reps}
                    />
                    Reps:
                  </label>
                  <label>
                    <input
                      type="button"
                      className="btn btn-primary"
                      onClick={this.calc_bp_1RM}
                      value="calc. 1 Rep Max"
                    />
                  </label>
                  <label>
                    <input
                      className="result"
                      type="text"
                      name="bp_max1"
                      value={this.state.bp_max1}
                      readOnly
                    />
                    Max:
                  </label>
                </form>

                <form className="oneRep">
                  <br />
                  <h6>Barbell Row:</h6>
                  <label>
                    <input
                      type="number"
                      name="row_weight"
                      onChange={this.handleChange_row_weight}
                    />
                    Weight:
                  </label>
                  <label>
                    <input
                      type="number"
                      name="row_reps"
                      onChange={this.handleChange_row_reps}
                    />
                    Reps:
                  </label>
                  <label>
                    <input
                      type="button"
                      className="btn btn-primary"
                      onClick={this.calc_row_1RM}
                      value="calc. 1 Rep Max"
                    />
                  </label>
                  <label>
                    <input
                      className="result"
                      type="text"
                      name="row_max1"
                      value={this.state.row_max1}
                      readOnly
                    />
                    Max:
                  </label>
                </form>

                <form className="oneRep">
                  <br />
                  <h6>Overhead Press:</h6>
                  <label>
                    <input
                      type="number"
                      name="oh_weight"
                      onChange={this.handleChange_oh_weight}
                    />
                    Weight:
                  </label>
                  <label>
                    <input
                      type="number"
                      name="oh_reps"
                      onChange={this.handleChange_oh_reps}
                    />
                    Reps:
                  </label>
                  <label>
                    <input
                      type="button"
                      className="btn btn-primary"
                      onClick={this.calc_oh_1RM}
                      value="calc. 1 Rep Max"
                    />
                  </label>
                  <label>
                    <input
                      className="result"
                      type="text"
                      name="oh_max1"
                      value={this.state.oh_max1}
                      readOnly
                    />
                    Max:
                  </label>
                </form>

                <form className="oneRep">
                  <br />
                  <h6>Squat:</h6>
                  <label>
                    <input
                      type="number"
                      name="sq_weight"
                      onChange={this.handleChange_sq_weight}
                    />
                    Weight:
                  </label>
                  <label>
                    <input
                      type="number"
                      name="sq_reps"
                      onChange={this.handleChange_sq_reps}
                    />
                    Reps:
                  </label>
                  <label>
                    <input
                      type="button"
                      className="btn btn-primary"
                      onClick={this.calc_sq_1RM}
                      value="calc. 1 Rep Max"
                    />
                  </label>
                  <label>
                    <input
                      className="result"
                      type="text"
                      name="sq_max1"
                      value={this.state.sq_max1}
                      readOnly
                    />
                    Max:
                  </label>
                </form>

                <form className="oneRep">
                  <br />
                  <h6>Deadlift:</h6>
                  <label>
                    <input
                      type="number"
                      name="dl_weight"
                      onChange={this.handleChange_dl_weight}
                    />
                    Weight:
                  </label>
                  <label>
                    <input
                      type="number"
                      name="dl_reps"
                      onChange={this.handleChange_dl_reps}
                    />
                    Reps:
                  </label>
                  <label>
                    <input
                      type="button"
                      className="btn btn-primary"
                      onClick={this.calc_dl_1RM}
                      value="calc. 1 Rep Max"
                    />
                  </label>
                  <label>
                    <input
                      className="result"
                      type="text"
                      name="dl_max1"
                      value={this.state.dl_max1}
                      readOnly
                    />
                    Max:
                  </label>
                </form>
              </div>
            ) : null}
          </Container>

          <Container>
            {this.state.showMeTable ? (
              <div className="tablePlacement">{this.renderTableOption()}</div>
            ) : null}
          </Container>
        </div>
      </Container>
    );
  }
}

export default CreateProgram;
