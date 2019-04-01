import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/authActions";
import { Button } from "reactstrap";
import logo from "../../img/logo.png";
import Nav from 'react-bootstrap/Nav'
import Profile from "../user/Profile";
import Userlist from "../user/Userlist";
import Users from "../user/Users";



export class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/Userlist" component={Userlist} />
        <Route exact path="/Users" component={Users} />
        <Route exact path="/Profile" component={Profile} />
      

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container nav-wrapper black">
          <Link className="navbar-brand" to="/Profile">
            <img src={logo} height="70px" alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="dropdown">
            <>
              <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                  <Nav.Link href="/Admin">Active</Nav.Link>
                </Nav.Item>
              </Nav>
            </>
            ;
          </div>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Users">
                  {" "}
                  Helpers
                </Link>
              </li>
            </ul>
            {/* КОД ИЛЬИ */}
            <ul className="navbar-nav ml-auto">
              {!this.props.isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Sign in
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Button
                    color="info"
                    size="sm"
                    className="nav-link"
                    onClick={this.onLogoutClick}
                  >
                    {" "}
                    Logout{" "}
                  </Button>
                </li>
              )}
              {/* КОД ИЛЬИ */}
            </ul>
          </div>
        </div>
      </nav>
      </Switch>
      </BrowserRouter>
      
    );
  }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
  };
};

// export default connect(mapStateToProps)(Navbar);

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
