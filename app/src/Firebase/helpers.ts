import firebase, { firestore } from "./index";

export const createAccount = (
  data: {
    email: string;
    password: string;
    rPassword: string;
    lastName: string;
    name: string;
  },
  onError: (msg: string) => void,
  onSucces
) => {
  const { email, password, lastName, name } = data;
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((data: any) => {
      const { uid } = data.user;
      firestore.collection("users").doc(uid).set({ email, lastName, name });
      onSucces();
    })
    .catch((error) => {
      console.log(error.message);
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          onError("Invalid email");
          break;
        case "auth/email-already-in-use":
          onError("User is already exist");
          break;
      }
    });
};
