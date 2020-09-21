import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store, { persistedStore } from "./store";
import Main from "./screens/Main";
import { MAIN } from "./navRoutes";

import ThemeProvider from "./ThemeProvider";
import withNavigation from "./hocs/withNavigation";

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ThemeProvider>
          <Router>
            <Switch>
              <Route exact path={MAIN} component={withNavigation(Main)} />
            </Switch>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};
