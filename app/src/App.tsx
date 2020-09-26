import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Router, Route, Switch } from "react-router-dom";
import store, { persistedStore } from "./store";
import Main from "./screens/Main";
import { AUTH, MAIN, MEN_HOME, WOMEN_HOME } from "./navRoutes";

import withNavigation from "./hocs/withNavigation";
import "./style.scss";
import Auth from "./screens/Auth";
import history from "./history";

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistedStore}>
      <Router history={history}>
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
          <Route path={AUTH}>
            <Auth />
          </Route>
        </Switch>
      </Router>
    </PersistGate>
  </Provider>
);
