import React, { Component } from "react";
import routes from "./routes";
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from "react-router-dom";

// Import Scss
import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            {routes.map((route, idx) => (
              <Route path={route.path} component={route.component} key={idx} />
            ))}
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default withRouter(App);