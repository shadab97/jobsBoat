import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import { isLogedIn } from "./Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import PostJob from "./pages/PostJob/PostJob";
import SignUp from "./pages/Signup/SignUp";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  const history = useHistory();
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <PrivateRoute path="/dashboard" exact component={Dashboard} />
      <PrivateRoute path="/postjob" exact component={PostJob} />
    </Switch>
  );
};

export default Routes;
