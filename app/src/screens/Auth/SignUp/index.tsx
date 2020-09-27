/* eslint react-hooks/exhaustive-deps: 0*/

import React, { useCallback, useState } from "react";
import { createAccount } from "../../../Firebase/helpers";
import { SIGN_IN } from "../../../navRoutes";
import BottomRedirect from "../components/BottomRedirect";
import Container from "../components/Container";
import ErrorText from "../components/ErrorText";
import Input from "../components/Input";
import Loading from "../components/Loading";
import SuccessWindow from "../components/SuccessWindow";
import Title from "../components/Title";

const isEmptyStr = (str: string) => str.length === 0;

export default () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [rPassword, setRPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const onError = useCallback((msg: string) => {
    setLoading(false);
    setError(msg);
  }, []);
  const onSucces = useCallback(() => {
    setLoading(false);
    setSuccess(true);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (
        isEmptyStr(email) ||
        isEmptyStr(name) ||
        isEmptyStr(lastName) ||
        isEmptyStr(password) ||
        isEmptyStr(rPassword)
      )
        setError("Some field are empty");
      else if (password.length < 6)
        setError("Password must be at least 6 characters");
      else if (password !== rPassword)
        setError("Both password must be the smae");
      else {
        setLoading(true);
        createAccount(
          { email, name, lastName, password, rPassword },
          onError,
          onSucces
        );
      }
    },
    [email, name, lastName, password, rPassword]
  );
  return (
    <Container>
      <form onSubmit={onSubmit} className="auth-form" autoComplete="off">
        <Title title="Create account" />
        <Input
          label="Email"
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          name="email"
          value={email}
        />
        <Input
          label="Name"
          placeholder="Enter your name"
          onChangeText={(text) => setName(text)}
          name="name"
          value={name}
        />
        <Input
          label="Last name"
          placeholder="Enter your last name"
          onChangeText={(text) => setLastName(text)}
          name="last_name"
          value={lastName}
        />
        <Input
          label="Password"
          placeholder="Enter password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          name="password"
          type="password"
        />
        <Input
          label="Repeat password"
          placeholder="Enter password"
          onChangeText={(text) => setRPassword(text)}
          value={rPassword}
          name="reapt_password"
          type="password"
        />
        <div className="auth-button-container">
          <button className="auth-button">Sign up</button>
        </div>
      </form>
      <ErrorText>{error}</ErrorText>
      <BottomRedirect to={SIGN_IN} text={"Already have account?"} />
      {loading && <Loading />}
      {success && <SuccessWindow />}
    </Container>
  );
};
