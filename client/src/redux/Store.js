import { combineReducers, configureStore } from "@reduxjs/toolkit";
import * as user from "./reducers/userReducers";
import * as categories from "./reducers/CategoriesReducers";
import * as movies from "./reducers/MoviesReducers";

const rootReducer = combineReducers({
    // User reducers
    userLogin: user.userLoginReducer,
    userRegister: user.userRegisterReducer,
    userUpdateProfile: user.userUpdateProfileReducer,
    userDeleteProfile: user.userDeleteProfileReducer,
    userChangePassword: user.userChangePasswordReducer,
    userGetFavoriteMovies: user.userGetFavoriteMoviesReducer,
    userDeleteFavoriteMovies: user.userDeleteFavoriteMoviesReducer,
    adminGetAllUsers: user.adminGetAllUsersReducer,
    adminDeleteUser: user.adminDeleteUserReducer,

    // Category reducers
    categoryGetAll: categories.getAllCategoriesReducer,
    categoryCreate: categories.createCategoryReducer,
    categoryUpdate: categories.updateCategoryReducer,
    categoryDelete: categories.deleteCategoryReducer,

    // Movies reducers
    getAllMovies: movies.moviesListReducer,
    getRandomMovies: movies.moviesRandomReducer,
    getMovieById: movies.movieDetailsReducer,
    getTopRatedMovie: movies.movieTopRatedReducer,
});

// Get userInfo from localStorage
const userInfoFromStorage = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null;

// InitialState
const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
};

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});
