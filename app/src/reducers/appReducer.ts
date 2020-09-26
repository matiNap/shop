import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";
import { UserData } from "../types";
import firebase, { firestore } from "../Firebase";
import { AppThunk } from "../store";
import history from "../history";
import { MAIN } from "../navRoutes";

const INIT_STATE: {
  lang: string;
  user: null | UserData;
} = {
  lang: "US",
  user: null,
};

const appSlice = createSlice({
  name: "app",
  initialState: INIT_STATE,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },

  extraReducers: {
    [REHYDRATE]: (state, action) => {
      const app =
        action.payload && action.payload.app ? action.payload.app : INIT_STATE;
      return { ...state, lang: app.lang, user: app.user };
    },
  },
});

export const { setLang, setUser } = appSlice.actions;

export default appSlice.reducer;

export const signIn = (
  email: string,
  password: string,
  onError: (msg: string) => void,
  onSuccess: () => void
): AppThunk => async (disaptch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (data: any) => {
      const { uid } = data.user;

      const user = await firestore.collection("users").doc(uid).get();
      history.push(MAIN);
      disaptch(setUser({ ...user.data(), uid }));

      onSuccess();
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/wrong-password":
          onError("Wrong password");
          break;
        case "auth/invalid-email":
          onError("Inavlid email");
          break;
        case "auth/user-not-found":
          onError("User not found");
          break;
      }
    });
};
