import React, { useCallback, useState } from "react";
import { FiCheck } from "react-icons/fi";
import Popup from "../../../components/Popup";
import Container from "../components/Container";
import Input from "../components/Input";
import Title from "../components/Title";
import firebase from "../../../Firebase";
import ErrorText from "../components/ErrorText";
import BottomRedirect from "../components/BottomRedirect";
import { SIGN_IN } from "../../../navRoutes";

export default () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sended, setSended] = useState(false);
  const [resend, setResend] = useState(false);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          setSended(true);
          setResend(true);
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code === "auth/invalid-email") setError("Inavlid email");
          else if (error.code === "auth/user-not-found")
            setError("User does not exist");
        });
    },
    [email]
  );
  return (
    <Container>
      <form className="auth-form" onSubmit={onSubmit}>
        <Title title="Reset password" />
        <Input
          label="Email"
          value={email}
          placeholder="Enter your email"
          onChangeText={(text) => setEmail(text)}
          name="email"
        />
        <ErrorText>{error}</ErrorText>
        <button className="send-button">{resend ? "Resend" : "Send"}</button>
        <BottomRedirect to={SIGN_IN} text="Back to login page" />
      </form>
      {sended && (
        <Popup>
          <h1>Successfuly sended reset email</h1>
          <FiCheck size={80} className="success-icon" />
          <p className="reset-info">Check your mailbox to reset your email</p>

          <button
            className="popup-confirm-button"
            onClick={() => {
              setSended(false);
              setEmail("");
            }}
          >
            Ok
          </button>
        </Popup>
      )}
    </Container>
  );
};
