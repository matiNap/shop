import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Logo from "../../components/Logo";
import history from "../../history";
import { AUTH, SIGN_IN, SIGN_UP } from "../../navRoutes";
import { RootState } from "../../store";
import { UserData } from "../../types";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { connect } from "react-redux";
import "./style.scss";

interface Props {
  location: any;
  user: UserData | null;
}

class Auth extends React.Component<any> {
  componentDidMount() {
    const {
      location: { pathname },
    } = this.props;

    // if (this.props.user) history.push(MAIN);

    if (pathname === AUTH || pathname === `${AUTH}/`) history.push(SIGN_IN);
  }

  render() {
    return (
      <div className="auth-container">
        <div className="auth-header">
          <Logo />
        </div>
        <div className="route-screen">
          <Switch>
            <Route exact path={SIGN_UP} component={SignUp} />
            <Route exact path={SIGN_IN} component={SignIn} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    user: state.app.user,
  };
};

export default connect(mapStateToProps)(withRouter(Auth));
