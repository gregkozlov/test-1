import { createSlice } from "@reduxjs/toolkit";

export type Theme = {
  theme: "light" | "dark";
};

const initialState: Theme = {
  theme: !localStorage.getItem("theme") || localStorage.getItem("theme") === "light" ? "light" : "dark"
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
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
export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
