import { createSlice } from "@reduxjs/toolkit";

export type User = {
  isAuth: boolean;
};

const initialState: User = {
  isAuth: false
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuth = true;
    },
    logOut: (state) => {
      state.isAuth = false;
    }
  }
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
