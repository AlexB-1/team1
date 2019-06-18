import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import Logout from "./auth/Logout";
import Home from "./Home";
import TrainingPrograms from "./TrainingPrograms";
import Nutrition from "./Nutrition";
import Exercises from "./Exercises";
import CreateProgram from "./CreateProgram";
import ItemList from "./ItemList";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <Fragment>
        <Link className="nav-link" to="/TrainingPrograms">
          Training Programs
        </Link>
        <Link className="nav-link" to="/CreateProgram">
          Create Program
        </Link>
        <Link className="nav-link" to="/Exercises">
          Exercises
        </Link>
        <Link className="nav-link" to="/Nutrition">
          Nutrition
        </Link>
        <Link className="nav-link" to="/ItemList">
          Training Log
        </Link>
        <NavItem>
          <span className="navbar-text ml-5 mr-3">
            <strong>{user ? `Welcome ${user.name}` : ""}</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <NavItem>
          <RegisterModal />
        </NavItem>
        <NavItem>
          <LoginModal />
        </NavItem>
      </Fragment>
    );

    return (
      <Router>
        <div>
          <Navbar color="dark" dark expand="sm" className="mb-0">
            <Link className="navbar-brand" to="/">
              TracKing
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {isAuthenticated ? authLinks : guestLinks}
              </Nav>
            </Collapse>
          </Navbar>
          <div className="main">
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/TrainingPrograms"
              component={isAuthenticated ? TrainingPrograms : Home}
            />
            <Route
              exact
              path="/Nutrition"
              component={isAuthenticated ? Nutrition : Home}
            />
            <Route
              exact
              path="/Exercises"
              component={isAuthenticated ? Exercises : Home}
            />
            <Route
              exact
              path="/CreateProgram"
              component={isAuthenticated ? CreateProgram : Home}
            />
            <Route
              exact
              path="/ItemList"
              component={isAuthenticated ? ItemList : Home}
            />
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(AppNavbar);
