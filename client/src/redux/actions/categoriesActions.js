import * as CategoriesConstants from "../constants/CategoriesConstants";
import * as categoriesAPIs from "../apis/CategoriesServices";
import toast from "react-hot-toast";
import { ErrorsAction, tokenProtection } from "../Protection";

// Get all categories actions
export const getAllCategoriesAction = () => async (dispatch) => {
    try {
        dispatch({ type: CategoriesConstants.GET_ALL_CATEGORIES_REQUEST });
        const data = await categoriesAPIs.getCategoriesService();
        dispatch({
            type: CategoriesConstants.GET_ALL_CATEGORIES_SUCCESS,
            payload: data,
        });
    } catch (error) {
        ErrorsAction(
            error,
            dispatch,
            CategoriesConstants.GET_ALL_CATEGORIES_FAIL
        );
    }
};

// Create categories actions
export const createCategoriesAction = (title) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CategoriesConstants.CREATE_CATEGORIES_REQUEST,
        });
        await categoriesAPIs.createCategoryService(
            title,
            tokenProtection(getState)
        );
        dispatch({ type: CategoriesConstants.CREATE_CATEGORIES_SUCCESS });
        toast.success("Category created successfully");
    } catch (error) {
        ErrorsAction(
            error.dispatch,
            CategoriesConstants.CREATE_CATEGORIES_FAIL
        );
    }
};

// Update categories actions
export const updateCategoriesAction =
    (id, title) => async (dispatch, getState) => {
        try {
            dispatch({
                type: CategoriesConstants.UPDATE_CATEGORIES_REQUEST,
            });
            await categoriesAPIs.updateCategoryService(
                id,
                title,
                tokenProtection(getState)
            );
            dispatch({ type: CategoriesConstants.UPDATE_CATEGORIES_SUCCESS });
            toast.success("Category updated successfully");
            dispatch(getAllCategoriesAction());
        } catch (error) {
            ErrorsAction(
                error.dispatch,
                CategoriesConstants.UPDATE_CATEGORIES_FAIL
            );
        }
    };

// Delete categories actions
export const deleteCategoriesAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: CategoriesConstants.DELETE_CATEGORIES_REQUEST });
        await categoriesAPIs.deleteCategoryService(
            id,
            tokenProtection(getState)
        );
        dispatch({ type: CategoriesConstants.DELETE_CATEGORIES_SUCCESS });
        toast.success("Category deleted successfully");
        dispatch(getAllCategoriesAction());
    } catch (error) {
        ErrorsAction(
            error,
            dispatch,
            CategoriesConstants.DELETE_CATEGORIES_FAIL
        );
    }
};
