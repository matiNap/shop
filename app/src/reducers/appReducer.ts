import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: [],
  reducers: {
    test: () => {},
  },
});

export default appSlice.reducer;
