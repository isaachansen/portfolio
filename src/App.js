import React from "react";
import "./App.css";
import Landing from "./Components/Landing/Landing";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Landing /> */}
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route path="/projects" />
        </Switch>
      </div>
    );
  }
}

export default App;
