import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Logo from "../../components/Logo";
import history from "../../history";
import { AUTH, SIGN_IN, SIGN_UP } from "../../navRoutes";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "./style.scss";

interface Props {
  location: any;
}

class Auth extends React.Component<any> {
  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;

    if (pathname === AUTH || pathname === `${AUTH}/`) history.push(SIGN_IN);
  }

  render() {
    return (
      <div className="auth-container">
        <div className="auth-header">
          <Logo />
        </div>
        <Switch>
          <Route exact path={SIGN_UP} component={SignUp} />
          <Route exact path={SIGN_IN} component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Auth);
