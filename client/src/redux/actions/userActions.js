import * as userConstants from "../constants/userConstants";
import * as userApi from "../apis/userServices";
import toast from "react-hot-toast";
import { ErrorsAction, tokenProtection } from "../Protection";

// Login actions
const loginAction = (datas) => async (dispatch) => {
    try {
        dispatch({ type: userConstants.USER_LOGIN_REQUEST });
        const response = await userApi.loginService(datas);
        dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_LOGIN_FAIL);
    }
};

// Register actions
const registerAction = (datas) => async (dispatch) => {
    try {
        dispatch({ type: userConstants.USER_REGISTER_REQUEST });
        const response = await userApi.registerService(datas);
        dispatch({
            type: userConstants.USER_REGISTER_SUCCESS,
            payload: response,
        });
        dispatch({ type: userConstants.USER_LOGIN_SUCCESS, payload: response });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_REGISTER_FAIL);
    }
};

// Logout action
const logoutAction = () => (dispatch) => {
    userApi.logoutService();
    dispatch({ type: userConstants.USER_LOGOUT });
    dispatch({ type: userConstants.USER_LOGIN_RESET });
    dispatch({ type: userConstants.USER_REGISTER_RESET });
};

// Update profile action
const updateProfileAction = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_UPDATE_PROFILE_REQUEST });
        const response = await userApi.updateProfileService(
            user,
            tokenProtection(getState)
        );
        dispatch({
            type: userConstants.USER_UPDATE_PROFILE_SUCCESS,
            payload: response,
        });
        toast.success("Profile updated successfully");
        dispatch({
            type: userConstants.USER_LOGIN_SUCCESS,
            payload: response,
        });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_UPDATE_PROFILE_FAIL);
    }
};

// Delete profile action
const deleteProfileAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_DELETE_PROFILE_REQUEST });
        await userApi.deleteProfileService(tokenProtection(getState));
        dispatch({ type: userConstants.USER_DELETE_PROFILE_SUCCESS });
        toast.success("Profile deleted successfully");
        dispatch(logoutAction());
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_DELETE_PROFILE_FAIL);
    }
};

// Change password action
const changePasswordAction = (passwords) => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.USER_CHANGE_PASSWORD_REQUEST });
        const response = await userApi.changePasswordService(
            passwords,
            tokenProtection(getState)
        );
        dispatch({
            type: userConstants.USER_CHANGE_PASSWORD_SUCCESS,
            payload: response,
        });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.USER_CHANGE_PASSWORD_FAIL);
    }
};

// Get all favorites actions
const getFavoritesMoviesAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.GET_FAVORITE_MOVIES_REQUEST });
        const response = await userApi.getFavoriteMovies(
            tokenProtection(getState)
        );
        dispatch({
            type: userConstants.GET_FAVORITE_MOVIES_SUCCESS,
            payload: response,
        });
    } catch (error) {
        ErrorsAction(error, dispatch, userConstants.GET_FAVORITE_MOVIES_FAIL);
    }
};

// Delete all favorites movies
const deleteFavoriteMoviesAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: userConstants.DELETE_FAVORITE_MOVIES_REQUEST });
        await userApi.deleteFavoriteMovies(tokenProtection(getState));
        dispatch({ type: userConstants.DELETE_FAVORITE_MOVIES_SUCCESS });
        toast.success("Favorites deleted successfully");
    } catch (error) {
        ErrorsAction(
            error,
            dispatch,
            userConstants.DELETE_FAVORITE_MOVIES_FAIL
        );
    }
};

export {
    loginAction,
    registerAction,
    logoutAction,
    updateProfileAction,
    deleteProfileAction,
    changePasswordAction,
    getFavoritesMoviesAction,
    deleteFavoriteMoviesAction,
};
