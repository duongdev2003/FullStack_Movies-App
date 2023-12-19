import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as User from "./reducers/userReducers";

const rootReducer = combineReducers({
    // User reducers
    userLogin: User.userLoginReducer,
    userRegister: User.userRegisterReducer,
});

// Get userInfo from localStorage
const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

// InitialState
const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
};

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});
