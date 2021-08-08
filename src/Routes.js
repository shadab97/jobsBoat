import React from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";

import { isLogedIn } from "./Auth/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import PostJob from "./pages/PostJob/PostJob";
import SignUp from "./pages/Signup/SignUp";


const Routes = () => {
  const history = useHistory();
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/dashboard" exact component={isLogedIn() ? Dashboard : history.push('/login')} />
      <Route path="/postjob" exact component={isLogedIn() ? PostJob : history.push('/login')} />
    </Switch>
  );
};

export default Routes;
