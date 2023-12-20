import * as userConstants from "../constants/userConstants";

// Login
export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_LOGIN_REQUEST:
            return { isLoading: true };
        case userConstants.USER_LOGIN_SUCCESS:
            return {
                isLoading: false,
                userInfo: action.payload,
                isSuccess: true,
            };
        case userConstants.USER_LOGIN_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_LOGIN_RESET:
            return {};
        case userConstants.USER_LOGOUT:
            return {};
        default:
            return state;
    }
};

// Register
export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_REGISTER_REQUEST:
            return { isLoading: true };
        case userConstants.USER_REGISTER_SUCCESS:
            return {
                isLoading: false,
                userInfo: action.payload,
                isSuccess: true,
            };
        case userConstants.USER_REGISTER_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_REGISTER_RESET:
            return {};
        default:
            return state;
    }
};

// Update Profile
export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_UPDATE_PROFILE_REQUEST:
            return { isLoading: true };
        case userConstants.USER_UPDATE_PROFILE_SUCCESS:
            return {
                isLoading: false,
                userInfo: action.payload,
                isSuccess: true,
            };
        case userConstants.USER_UPDATE_PROFILE_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_UPDATE_PROFILE_RESET:
            return {};
        default:
            return state;
    }
};

// Delete Profile
export const userDeleteProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_DELETE_PROFILE_REQUEST:
            return { isLoading: true };
        case userConstants.USER_DELETE_PROFILE_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case userConstants.USER_DELETE_PROFILE_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_DELETE_PROFILE_RESET:
            return {};
        default:
            return state;
    }
};

// Change password
export const userChangePasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case userConstants.USER_CHANGE_PASSWORD_REQUEST:
            return { isLoading: true };
        case userConstants.USER_CHANGE_PASSWORD_SUCCESS:
            return {
                isLoading: false,
                isSuccess: true,
                message: action.payload.message,
            };
        case userConstants.USER_CHANGE_PASSWORD_FAIL:
            return { isLoading: false, isError: action.payload };
        case userConstants.USER_CHANGE_PASSWORD_RESET:
            return {};
        default:
            return state;
    }
};
