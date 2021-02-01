import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved"
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Nav />
          <Header />
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
