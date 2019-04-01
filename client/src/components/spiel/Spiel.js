import React, { Component } from "react";
import spiel_logo from "../../img/spiel.png";

class Spiel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={spiel_logo} alt="" />
      </div>
    );
  }
}

export default Spiel;
