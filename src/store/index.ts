import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSliceReducer, layoutSliceReducer } from "../appSlices";

const rootReducer = combineReducers({
  userSliceReducer,
  layoutSliceReducer
});

export const store = configureStore({
  reducer: { rootReducer }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
