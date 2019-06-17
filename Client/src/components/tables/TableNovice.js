import React from "react";

const TableNovice = props => {
  let perc = "80%";
  let perc2 = 0.8;
  let sets = "3";
  let sets2 = "2";
  let reps = "8 - 12";
  let reps2 = "5 - 8";
  let reps3 = "12 - 15";
  let na = ' " " ';
  // let adjust = 'Adjust to meet reps';

  return (
    <div className="progrmaTablePlacement">
      <br />
      <br />
      <br />
      <br />
      <h5>
        Novice Level Workout - 3 Days / Week (Alternate A / B + Core Exercises)
      </h5>

      <h6>Novice Workout "A"</h6>
      <div className="workout_A">
        <table className="programTable">
          <thead>
            <tr>
              <th>Exercise.</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>1 Rep Max</th>
              <th>% of 1 Rep Max</th>
              <th>Weight</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Bench Press</td>
              <td>{sets}</td>
              <td>{reps}</td>
              <td>{props.bp_max1}</td>
              <td>{perc}</td>
              <td>{Math.ceil(props.bp_max1 * perc2)}</td>
            </tr>
            <tr>
              <td>Barbell Row</td>
              <td>{sets}</td>
              <td>{reps}</td>
              <td>{props.row_max1}</td>
              <td>{perc}</td>
              <td>{Math.ceil(props.row_max1 * perc2)}</td>
            </tr>
            <tr>
              <td>Barbell Back Squat</td>
              <td>{sets}</td>
              <td>{reps}</td>
              <td>{props.sq_max1}</td>
              <td>{perc}</td>
              <td>{Math.ceil(props.sq_max1 * perc2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <h6>Novice Workout "B"</h6>
      <div className="workout_B">
        <table className="programTable">
          <thead>
            <tr>
              <th>Exercise.</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>1 Rep Max</th>
              <th>% of 1 Rep Max</th>
              <th>Weight</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Overhead Press</td>
              <td>{sets}</td>
              <td>{reps}</td>
              <td>{props.oh_max1}</td>
              <td>{perc}</td>
              <td>{Math.ceil(props.oh_max1 * perc2)}</td>
            </tr>
            <tr>
              <td>Deadlift</td>
              <td>{sets}</td>
              <td>{reps2}</td>
              <td>{props.dl_max1}</td>
              <td>{perc}</td>
              <td>{Math.ceil(props.dl_max1 * perc2)}</td>
            </tr>
            <tr>
              <td>Barbell Back Squat</td>
              <td>{sets}</td>
              <td>{reps}</td>
              <td>{props.sq_max1}</td>
              <td>{perc}</td>
              <td>{Math.ceil(props.sq_max1 * perc2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <h6>Core Exercises (to be completed 2x per week)</h6>
      <div>
        <table className="programTable">
          <thead>
            <tr>
              <th>Exercise.</th>
              <th>Sets</th>
              <th>Reps</th>
              <th>1 Rep Max</th>
              <th>% of 1 Rep Max</th>
              <th>Weight</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Incline Situps</td>
              <td>{sets2}</td>
              <td>{reps3}</td>
              <td>{na}</td>
              <td>{na}</td>
              <td>{na}</td>
            </tr>
            <tr>
              <td>Hanging Leg Raise</td>
              <td>{sets2}</td>
              <td>{reps3}</td>
              <td>{na}</td>
              <td>{na}</td>
              <td>{na}</td>
            </tr>
            <tr>
              <td>Russian Twist</td>
              <td>{sets2}</td>
              <td>{reps3}</td>
              <td>{na}</td>
              <td>{na}</td>
              <td>{na}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableNovice;
