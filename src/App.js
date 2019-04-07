import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.css";

import CardList from "./CardList";
import CardEdit from "./CardEdit";
import CardAddNList from "./CardAddNList";
import reducers from "./reducers";

const store = createStore(
  reducers,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="container">
            <h1>Redux</h1>
            <Switch>
              <Route path="/cards" component={CardList} />
              <Route path="/card/:id" component={CardEdit} />
              <Route path="/add" component={CardAddNList} />
              <Redirect to="/add" component={CardAddNList} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
