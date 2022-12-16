import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSliceReducer, themeSliceReducer } from "../appSlices";

const rootReducer = combineReducers({
  userSliceReducer,
  themeSliceReducer
});

export const store = configureStore({
  reducer: { rootReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
