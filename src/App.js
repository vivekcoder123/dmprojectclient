import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/admin/login";
import { Provider } from "react-redux";
import store from "./store";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
