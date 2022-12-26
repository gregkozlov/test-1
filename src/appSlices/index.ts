// export * from "./theme.slice";
export * from "./user.slice";
export * from "./layout.slice";

// export reducers, them import them in store and add to combineReducers
export { default as userSliceReducer } from "./user.slice";
export { default as layoutSliceReducer } from "./layout.slice";
