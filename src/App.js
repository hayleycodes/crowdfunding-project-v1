import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/HomePage";
import About from "./pages/ProjectPage";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/project">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
