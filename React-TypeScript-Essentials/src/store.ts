import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./starter/07-reducers/reducer";


export const store = configureStore({
  reducer: counterReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch