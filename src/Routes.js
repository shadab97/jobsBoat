import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import PostJob from "./pages/PostJob/PostJob";
import SignUp from "./pages/Signup/SignUp";


const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/postjob" exact component={PostJob} />
    </Switch>
  );
};

export default Routes;
