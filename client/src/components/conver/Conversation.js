import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      
      <div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-6 flex-div">
            
            <NavLink to="/Chat">Chat</NavLink>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 flex-div">
            {" "}
            <NavLink to="/Forum">Forum</NavLink>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 flex-div">
            {" "}
            <NavLink to="/Pm">PM</NavLink>
            
            
          </div>
        </div>
      </div>
    );
  }
}

export default Conversation;
