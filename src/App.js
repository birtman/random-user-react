import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  return (
    <main className="greeting">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
      </Switch>
    </main>
  );
}

export default App;
