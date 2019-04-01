import React from "react";
// import { Button } from "reactstrap";
import logo from "../../img/logo.png";
import {NavLink} from 'react-router-dom';
//import createBrowserHistory from "history/createBrowserHistory";
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
      <ul className="list-group list-group-horizontal">
       
          <li className="list-group-item"><NavLink to="/Signup"><img src={logo} height="100px" alt="logo" /></NavLink></li>
          <li className="list-group-item"><NavLink to="/Users">Users</NavLink></li>
          <li className="list-group-item"><NavLink to="/Conversation">Conversations Room</NavLink></li>
          <li className="list-group-item"><NavLink to="/Curi">Knowledge Base</NavLink></li>
          {/* <li class="list-group-item"><NavLink to="/gallery">Gallery</NavLink></li> */}
          <li className="list-group-item"><NavLink to="/Spiel">Spiel</NavLink></li>
        </ul>
         </div>
  );
};



export default Header;
