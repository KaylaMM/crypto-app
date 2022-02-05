import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
const Webpages = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
    </Router>
  );
};
export default Webpages;
