import * as CategoriesConstants from "../constants/CategoriesConstants";

// Get all categories
export const getAllCategoriesReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case CategoriesConstants.GET_ALL_CATEGORIES_REQUEST:
            return { isLoading: true };
        case CategoriesConstants.GET_ALL_CATEGORIES_SUCCESS:
            return { isLoading: false, categories: action.payload };
        case CategoriesConstants.GET_ALL_CATEGORIES_FAIL:
            return { isLoading: false, isError: action.payload };
        default:
            return state;
    }
};

// Create categories
export const createCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case CategoriesConstants.CREATE_CATEGORIES_REQUEST:
            return { isLoading: true };
        case CategoriesConstants.CREATE_CATEGORIES_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case CategoriesConstants.CREATE_CATEGORIES_FAIL:
            return { isLoading: false, isError: action.payload };
        case CategoriesConstants.CREATE_CATEGORIES_RESET:
            return {};
        default:
            return state;
    }
};

// Update categories
export const updateCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case CategoriesConstants.UPDATE_CATEGORIES_REQUEST:
            return { isLoading: true };
        case CategoriesConstants.UPDATE_CATEGORIES_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case CategoriesConstants.UPDATE_CATEGORIES_FAIL:
            return { isLoading: false, isError: action.payload };
        case CategoriesConstants.UPDATE_CATEGORIES_RESET:
            return {};
        default:
            return state;
    }
};

// Delete categories
export const deleteCategoryReducer = (state = {}, action) => {
    switch (action.type) {
        case CategoriesConstants.DELETE_CATEGORIES_REQUEST:
            return { isLoading: true };
        case CategoriesConstants.DELETE_CATEGORIES_SUCCESS:
            return { isLoading: false, isSuccess: true };
        case CategoriesConstants.DELETE_CATEGORIES_FAIL:
            return { isLoading: false, isError: action.payload };
        case CategoriesConstants.DELETE_CATEGORIES_RESET:
            return {};
        default:
            return state;
    }
};
