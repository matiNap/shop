import React, { useCallback, useState } from "react";
import { SIGN_UP } from "../../../navRoutes";
import BottomRedirect from "../components/BottomRedirect";
import Button from "../components/Button";
import Container from "../components/Container";
import ErrorText from "../components/ErrorText";
import Input from "../components/Input";
import Loading from "../components/Loading";
import { useDispatch } from "react-redux";
import { signIn } from "../../../reducers/appReducer";

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
    <Container title="Sign in">
      <form onSubmit={onSubmit} className="auth-form">
        <Input
          label="Email"
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          name="email"
          value={email}
        />

        <Input
          label="Password"
          placeholder="Enter password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          name="password"
          type="password"
        />

        <div className="auth-button-container">
          <Button>Sign in</Button>
        </div>
      </form>
      <ErrorText>{error}</ErrorText>
      <BottomRedirect to={SIGN_UP} text={"Do not have account?"} />
      {loading && <Loading />}
    </Container>
  );
};
