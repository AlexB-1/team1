import React from "react";

const TableAdvanced = props => {
  let perc = "70%";
  let perc2 = 0.7;
  let sets = "4";
  let sets2 = "3";
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
        Advanced Level Workout - 5 Days / Week (Push, Pull, Legs, Arms,
        Shoulders)
      </h5>

      <h6>Advanced Workout "Push" </h6>
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
              <td>Bench Press</td>
              <td>{sets}</td>
              <td>{reps}</td>
              <td>{props.bp_max1}</td>
              <td>{perc}</td>
              <td>{Math.ceil(props.bp_max1 * perc2)}</td>
            </tr>
            <tr>
              <td>Incline Bench Press</td>
              <td>{sets}</td>
              <td>{reps}</td>
              <td>{na}</td>
              <td>{perc}</td>
              <td>{na}</td>
            </tr>
            <tr>
              <td>Chest Dips</td>
              <td>{sets}</td>
              <td>{reps}</td>
              <td>{na}</td>
              <td>{na}</td>
              <td>{na}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <h6>Advanced Workout "Pull"</h6>
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
              <td>Barbell Row</td>
              <td>{sets}</td>
              <td>{reps}</td>
              <td>{props.row_max1}</td>
              <td>{perc}</td>
              <td>{Math.ceil(props.row_max1 * perc2)}</td>
            </tr>
            <tr>
              <td>Pullups</td>
              <td>{sets}</td>
              <td>{reps}</td>
              <td>{na}</td>
              <td>{na}</td>
              <td>{na}</td>
            </tr>
            <tr>
              <td>Straight Pull Down</td>
              <td>{sets}</td>
              <td>{reps}</td>
              <td>{props.row_max1}</td>
              <td>{perc}</td>
              <td>{Math.ceil(props.row_max1 * perc2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <h6>Advanced Workout "Legs"</h6>
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
            <tr>
              <td>Romanian deadlift</td>
              <td>{sets}</td>
              <td>{reps}</td>
              <td>{props.dl_max1}</td>
              <td>{perc}</td>
              <td>{Math.ceil(props.dl_max1 * perc2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <h6>Advanced Workout "Arms"</h6>
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
              <td>Barbell Curl</td>
              <td>{sets2}</td>
              <td>{reps}</td>
              <td>{na}</td>
              <td>{na}</td>
              <td>{na}</td>
            </tr>
            <tr>
              <td>Seated Curls</td>
              <td>{sets2}</td>
              <td>{reps}</td>
              <td>{na}</td>
              <td>{na}</td>
              <td>{na}</td>
            </tr>
            <tr>
              <td>Close-grip Bench</td>
              <td>{sets2}</td>
              <td>{reps}</td>
              <td>{na}</td>
              <td>{na}</td>
              <td>{na}</td>
            </tr>
            <tr>
              <td>Tricep Extensions</td>
              <td>{sets2}</td>
              <td>{reps}</td>
              <td>{na}</td>
              <td>{na}</td>
              <td>{na}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <h6>Advanced Workout "Shoulders"</h6>
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
              <td>Overhead Press</td>
              <td>{sets2}</td>
              <td>{reps}</td>
              <td>{props.oh_max1}</td>
              <td>{perc}</td>
              <td>{Math.ceil(props.oh_max1 * perc2)}</td>
            </tr>
            <tr>
              <td>Side Lateral Raise</td>
              <td>{sets2}</td>
              <td>{reps}</td>
              <td>{na}</td>
              <td>{na}</td>
              <td>{na}</td>
            </tr>
            <tr>
              <td>Front Raise</td>
              <td>{sets2}</td>
              <td>{reps}</td>
              <td>{na}</td>
              <td>{na}</td>
              <td>{na}</td>
            </tr>
            <tr>
              <td>Rear Delt Fly</td>
              <td>{sets2}</td>
              <td>{reps}</td>
              <td>{na}</td>
              <td>{na}</td>
              <td>{na}</td>
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

export default TableAdvanced;
