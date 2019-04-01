import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Footer from "../common/Footer";
import Content from '../common/Content';


import { Navbar } from "../layout/Navbar";


// parent components APP
class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Content />
        
      </div>
    );
  }
}

export default Dashboard;
