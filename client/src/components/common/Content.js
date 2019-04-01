import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
//import createBrowserHistory from "history/createBrowserHistory";
import "bootstrap/dist/css/bootstrap.min.css";
// import Profile from "../user/Profile";
// import Home from "./Home";
// import Conversation from "../conver/Conversation";
// import Chat from "../conver/Chat";
// import Forum from "../conver/Forum";
// import Pm from "../conver/Pm";
// import Users from "../user/Users";
// import Admin from "../user/Admin";
// import Teacher from "../user/Teacher";
// import Studenten from "../user/Studenten";
// import Userlist from "../user/Userlist";
// import Spiel from "../spiel/Spiel";
// import Curi from "../lehrgang/Curi";
// import Signup from "./login/Signup";
// import Login from "./login/Login";
// import Register from "./login/Register";
// import Success from "./login/Success";

//const history = createBrowserHistory();

const Content = () => {
  return (
    <div>
      <h1>COntenT</h1>
      {/* <Route exact path="/" render={() => <Redirect to="/Spiel" />} />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Ideen" component={Ideen} />
        <Route exact path="/Conversation" component={Conversation} />
        <Route exact path="/Chat" component={Chat} />
        <Route exact path="/Forum" component={Forum} />
        <Route exact path="/Pm" component={Pm} />
        <Route exact path="/Users" component={Users} />
        <Route exact path="/Admin" component={Admin} />
        <Route exact path="/Teacher" component={Teacher} />
        <Route exact path="/Studenten" component={Studenten} />
        <Route exact path="/Userlist" component={Userlist} />
        <Route exact path="/Pm" component={Pm} />
        <Route exact path="/Spiel" component={Spiel} />
        <Route exact path="/Curi" component={Curi} />
        <Route exact path="/Landing_1" component={Landing_1} />

        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Success" component={Success} />

        <Route component={NoMatch} />
      </Switch> */}
    </div>
  );
};

// const NoMatch = props => {
//   return <h1>404: {props.location.pathname}</h1>;
// };

// const Ideen = props => {
//   return <h3>Ideen:{props.location.pathname}</h3>;
// };

export default Content;
