import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved"
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          <Switch>
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
