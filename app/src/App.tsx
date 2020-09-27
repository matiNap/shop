import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store, { persistedStore } from "./store";
import Main from "./screens/Main";
import { AUTH, MAIN, MEN_HOME, WOMEN_HOME } from "./navRoutes";

import withNavigation from "./hocs/withNavigation";
import "./style.scss";
import Auth from "./screens/Auth";

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <Router>
        <Switch>
          <Route exact path={MAIN} component={withNavigation(Main)} />
          <Route
            exact
            path={MEN_HOME}
            component={withNavigation(() => {
              return <div>Men home</div>;
            })}
          />
          <Route
            exact
            path={WOMEN_HOME}
            component={withNavigation(() => {
              return <div>Women home</div>;
            })}
          />
          <Route path={AUTH} component={Auth} />
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);
