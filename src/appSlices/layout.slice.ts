import { createSlice } from "@reduxjs/toolkit";

export type Layout = {
  title: string;
  theme: "light" | "dark";
};

const initialState: Layout = {
  title: "",
  theme: !localStorage.getItem("theme") || localStorage.getItem("theme") === "light" ? "light" : "dark"
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    switchTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
        localStorage.setItem("theme", "dark");
      } else {
        state.theme = "light";
        localStorage.setItem("theme", "light");
      }
    }
  }
});

// Action creators are generated for each case reducer function
export const { changeTitle, switchTheme } = layoutSlice.actions;

export default layoutSlice.reducer;
