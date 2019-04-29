import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingPage";
import AboutMe from "./aboutPage";
import Projects from "./projectPage";
import Contact from "./contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
