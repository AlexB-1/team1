import React, { Component } from "react";
import "../css/video-react.css";
import { Player, ControlBar } from "video-react";
import { Button, Container } from "reactstrap";
import SquatVideo from "../videos/14621201-Barbell-Full-Squat.mp4";
import DeadliftVideo from "../videos/00321201-Barbell-Deadlift.mp4";
import BenchPressVideo from "../videos/00251201-Barbell-Bench-Press.mp4";
import BarbellRowVideo from "../videos/00271201-Barbell-Bent-Over-Row.mp4";
import OverHeadVideo from "../videos/10451201-Barbell-Seated-Military-Press.mp4";
import PullupVideo from "../videos/14291201-Wide-Grip-Pull-Up.mp4";
import ChestDipVideo from "../videos/14301201-Chest-Dip.mp4";
import TricepExtensionVideo from "../videos/00571201-Barbell-Lying-extension.mp4";
import SeatedCurlVideo from "../videos/03911201-Dumbbell-Seated-Curl.mp4";
import BarbellCurlVideo from "../videos/00311201-Barbell-Curl.mp4";
import CloseGripBenchPressVideo from "../videos/00551201-Barbell-Lying-Close-grip-Press.mp4";
import StraightArmPullDownVideo from "../videos/02371201-Cable-Straight-Arm-Pulldown.mp4";
import DumbBellInclinePressVideo from "../videos/03141201-Dumbbell-Incline-Bench-Press.mp4";
import DumbBellSideLateralVideo from "../videos/23171201-Dumbbell-Seated-Bent-Arm-Lateral-raise.mp4";
import FrontRaiseVideo from "../videos/08341201-Weighted-Front-Raise.mp4";
import StiffLeggedDeadliftVideo from "../videos/15431201-Barbell-Stiff-Legged-Deadlift.mp4";
import RearDeltFlyVideo from "../videos/03781201-Dumbbell-Rear-Fly.mp4";
import InclineSitupVideo from "../videos/11901201-Incline-Twisting-Sit-up.mp4";
import SeatedLegRaiseVideo from "../videos/06891201-Seated-Leg-Raise.mp4";
import RussianTwistVideo from "../videos/12471201-Russian-Twist.mp4";
import PropTypes from "prop-types";

Container.propTypes = {
  fluid: PropTypes.bool
  // applies .container-fluid class
};

const sources = {
  SquatVideo: SquatVideo,
  DeadliftVideo: DeadliftVideo,
  BenchPressVideo: BenchPressVideo,
  BarbellRowVideo: BarbellRowVideo,
  OverHeadVideo: OverHeadVideo,
  PullupVideo: PullupVideo,
  ChestDipVideo: ChestDipVideo,
  TricepExtensionVideo: TricepExtensionVideo,
  SeatedCurlVideo: SeatedCurlVideo,
  BarbellCurlVideo: BarbellCurlVideo,
  CloseGripBenchPressVideo: CloseGripBenchPressVideo,
  StraightArmPullDownVideo: StraightArmPullDownVideo,
  DumbBellInclinePressVideo: DumbBellInclinePressVideo,
  DumbBellSideLateralVideo: DumbBellSideLateralVideo,
  FrontRaiseVideo: FrontRaiseVideo,
  StiffLeggedDeadliftVideo: StiffLeggedDeadliftVideo,
  RearDeltFlyVideo: RearDeltFlyVideo,
  InclineSitupVideo: InclineSitupVideo,
  SeatedLegRaiseVideo: SeatedLegRaiseVideo,
  RussianTwistVideo: RussianTwistVideo
};

class VideoPlayer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      source: sources["SquatVideo"]
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    // subscribe state change
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  handleStateChange(state, prevState) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  play() {
    this.refs.player.play();
  }

  pause() {
    this.refs.player.pause();
  }

  load() {
    this.refs.player.load();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.refs.player.getState();
      const currentTime = player.currentTime;
      this.refs.player.seek(currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.refs.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const playbackRate = player.playbackRate;
      this.refs.player.playbackRate = playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const volume = player.volume;
      this.refs.player.volume = volume + steps;
    };
  }

  setMuted(muted) {
    return () => {
      this.refs.player.muted = muted;
    };
  }

  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name]
      });
      this.refs.player.load();
    };
  }

  render() {
    return (
      <Container>
        <div className="videoPlayer">
          <Player ref="player" autoPlay>
            <source src={this.state.source} type="video/mp4" />
            <ControlBar autoHide={false} />
          </Player>

          <Button
            onClick={this.changeSource("SquatVideo")}
            className="btn btn-outline-primary"
          >
            Squat
          </Button>
          <Button
            onClick={this.changeSource("DeadliftVideo")}
            className="btn btn-outline-primary"
          >
            Deadlift
          </Button>
          <Button
            onClick={this.changeSource("BenchPressVideo")}
            className="btn btn-outline-primary"
          >
            Bench Press
          </Button>
          <Button
            onClick={this.changeSource("BarbellRowVideo")}
            className="btn btn-outline-primary"
          >
            Barbell Row
          </Button>
          <Button
            onClick={this.changeSource("OverHeadVideo")}
            className="btn btn-outline-primary"
          >
            Overhead Press
          </Button>
          <Button
            onClick={this.changeSource("PullupVideo")}
            className="btn btn-outline-primary"
          >
            Pullups
          </Button>
          <Button
            onClick={this.changeSource("ChestDipVideo")}
            className="btn btn-outline-primary"
          >
            Chest Dips
          </Button>
          <Button
            onClick={this.changeSource("TricepExtensionVideo")}
            className="btn btn-outline-primary"
          >
            Tricep Extension
          </Button>
          <Button
            onClick={this.changeSource("SeatedCurlVideo")}
            className="btn btn-outline-primary"
          >
            Seated Curl
          </Button>
          <Button
            onClick={this.changeSource("BarbellCurlVideo")}
            className="btn btn-outline-primary"
          >
            Barbell Curl
          </Button>
          <Button
            onClick={this.changeSource("CloseGripBenchPressVideo")}
            className="btn btn-outline-primary"
          >
            Close-Grip Bench
          </Button>
          <Button
            onClick={this.changeSource("StraightArmPullDownVideo")}
            className="btn btn-outline-primary"
          >
            Pull-Down
          </Button>
          <Button
            onClick={this.changeSource("DumbBellInclinePressVideo")}
            className="btn btn-outline-primary"
          >
            Incline Press
          </Button>
          <Button
            onClick={this.changeSource("DumbBellSideLateralVideo")}
            className="btn btn-outline-primary"
          >
            Side Lateral
          </Button>
          <Button
            onClick={this.changeSource("FrontRaiseVideo")}
            className="btn btn-outline-primary"
          >
            Front Raise
          </Button>
          <Button
            onClick={this.changeSource("StiffLeggedDeadliftVideo")}
            className="btn btn-outline-primary"
          >
            RDL
          </Button>
          <Button
            onClick={this.changeSource("RearDeltFlyVideo")}
            className="btn btn-outline-primary"
          >
            Rear Delt Fly
          </Button>
          <Button
            onClick={this.changeSource("InclineSitupVideo")}
            className="btn btn-outline-primary"
          >
            Incline Situp
          </Button>
          <Button
            onClick={this.changeSource("SeatedLegRaiseVideo")}
            className="btn btn-outline-primary"
          >
            Leg Raise
          </Button>
          <Button
            onClick={this.changeSource("RussianTwistVideo")}
            className="btn btn-outline-primary"
          >
            Russian Twist
          </Button>
        </div>
      </Container>
    );
  }
}

export default VideoPlayer;
