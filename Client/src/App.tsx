import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Register } from "./components/register/Register";
import { LandingPage } from "./components/landingPage/LandingPage";
import { Booking } from "./components/booking/Booking";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/booking">
          <Booking />
        </Route>
        <Route path="/admin">
          //Här visar du komponenten som ska visas på den routen
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
