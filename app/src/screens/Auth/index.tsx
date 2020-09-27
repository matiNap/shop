import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Logo from "../../components/Logo";
import { MAIN, RESET_PASS, SIGN_IN, SIGN_UP } from "../../navRoutes";
import { RootState } from "../../store";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { useSelector } from "react-redux";
import "./style.scss";
import Forgot from "./Forgot";
import LangSelector from "../../components/LangSelector";

const AuthRoute = ({ children, ...rest }) => {
  const user = useSelector((state: RootState) => state.app.user);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: MAIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default () => {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <Logo />
        <LangSelector />
      </div>
      <div className="route-screen">
        <Switch>
          <AuthRoute path={SIGN_UP}>
            <SignUp />
          </AuthRoute>
          <AuthRoute path={SIGN_IN}>
            <SignIn />
          </AuthRoute>
          <AuthRoute path={RESET_PASS}>
            <Forgot />
          </AuthRoute>
          <Route path="*" component={() => <Redirect to={SIGN_IN} />} />
        </Switch>
      </div>
    </div>
  );
};
