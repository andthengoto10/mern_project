import React, { Component } from "react";
import { NavLink } from "react-router-dom";
//import Profile from "./user/profile";
import "bootstrap/dist/css/bootstrap.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 flex-div">
            {" "}
            <NavLink to="/Users">Users</NavLink>{" "}
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 flex-div">
            {" "}
            <NavLink to="/Curi">Knowledge Base</NavLink>{" "}
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 flex-div">
            {" "}
            <NavLink to="/Conversation">Conversations Room</NavLink>{" "}
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 flex-div">
            {" "}
            <NavLink to="/Bourse">Bourse</NavLink>{" "}
          </div>
        </div>
      </div>
      //   <div className="container-fluid">
      //     <div className="row">
      //       <div class="col-sm-4">
      //         <div><p>sdfgv</p></div>
      //         <div><p>sdfgv</p></div>
      //         <div><p>sdfgv</p></div>
      //         <div><p>sdfgv</p></div>
      //       </div>
      //     </div>
      /* { <ul>
          <li className="list-group-item">
            <NavLink to="/profile">Profile</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/curi">Knowledge Base</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/conversation">Conversations Room</NavLink>
          </li>
          <li className="list-group-item">
            <NavLink to="/bourse">Bourse</NavLink>
          </li>
        </ul> }*/
      //   </div>
    );
  }
}

export default Home;
