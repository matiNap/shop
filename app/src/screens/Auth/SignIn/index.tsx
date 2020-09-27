/* eslint react-hooks/exhaustive-deps: 0*/

import React, { useCallback, useState } from "react";
import { RESET_PASS, SIGN_UP } from "../../../navRoutes";
import BottomRedirect from "../components/BottomRedirect";
import Container from "../components/Container";
import ErrorText from "../components/ErrorText";
import Input from "../components/Input";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { signIn } from "../../../reducers/appReducer";
import Title from "../components/Title";

const isEmptyStr = (str: string) => str.length === 0;

export default () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const onError = useCallback((msg: string) => {
    setLoading(false);
    setError(msg);
  }, []);
  const onSucces = useCallback(() => {
    setLoading(false);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (isEmptyStr(email) || isEmptyStr(password))
        setError("Some field are empty");
      else {
        setLoading(true);
        dispatch(signIn(email, password, onError, onSucces));
      }
    },
    [email, password]
  );
  return (
    <Container>
      <form onSubmit={onSubmit} className="auth-form">
        <Title title="Sign in" />
        <Input
          label="Email"
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          name="email"
          value={email}
          type="email"
        />

        <Input
          label="Password"
          placeholder="Enter password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          name="password"
          type="password"
        />
        <div className="reset-pass-redirect">
          <BottomRedirect to={RESET_PASS} text="Forgot password?" />
        </div>

        <div className="auth-button-container">
          <button className="auth-button">Sign in</button>
        </div>
      </form>
      <ErrorText>{error}</ErrorText>
      <BottomRedirect to={SIGN_UP} text={"Do not have account?"} />
      {loading && <Loading />}
    </Container>
  );
};
