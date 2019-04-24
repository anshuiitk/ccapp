import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import CardAddNList from "./viewComponents/cardAddNList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1>Add Credit Cards here!</h1>
          <Switch>
            <Route path="/add" component={CardAddNList} />
            <Redirect to="/add" component={CardAddNList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
