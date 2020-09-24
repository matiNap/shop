import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";

const INIT_STATE = {
  lang: "US",
};

const appSlice = createSlice({
  name: "app",
  initialState: INIT_STATE,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
  extraReducers: {
    [REHYDRATE]: (state, action) => {
      const app =
        action.payload && action.payload.app ? action.payload.app : INIT_STATE;
      return { ...state, lang: app.lang };
    },
  },
});

export const { setLang } = appSlice.actions;

export default appSlice.reducer;
