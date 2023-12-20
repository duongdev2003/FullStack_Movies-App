import { logoutAction } from "./actions/userActions";

export const ErrorsAction = (error, dispatch, action) => {
    const message =
        error.repsonse && error.repsonse.data.message
            ? error.repsonse.data.message
            : error.message;
    if (message === "Not authorized, token failed") {
        dispatch(logoutAction());
    }
    return dispatch({ type: action, payload: message });
};

// API token protection
export const tokenProtection = (getState) => {
    const {
        userLogin: { userInfo },
    } = getState();
    if (!userInfo?.token) {
        return null;
    } else {
        return userInfo?.token;
    }
};
