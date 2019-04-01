import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>
          Users
          {/* по умолчанию показывает твою группу */}
        </p>
        <div>
          <div className="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 flex-div">
                {" "}
                <NavLink to="/Admin">Administration</NavLink>{" "}
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 flex-div">
                {" "}
                <NavLink to="/Teacher">Teachers</NavLink>{" "}
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12 flex-div">
                {" "}
                <NavLink to="/Studenten">Studenten</NavLink>{" "}
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 flex-div">
                {" "}
                <NavLink to="/Userlist">Userlist</NavLink>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
