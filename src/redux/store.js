import { configureStore } from "@reduxjs/toolkit";
import { useReducer } from "./user/reducer";

export const store = configureStore({
    reducer: {
        userDetails: useReducer,
    }
});