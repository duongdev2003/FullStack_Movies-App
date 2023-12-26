import * as moviesConstants from "../constants/MoviesConstants";
import * as moviesAPIs from "../apis/MoviesServices";
import { ErrorsAction } from "../Protection";

// Get all movies actions
export const getAllMoviesAction =
    ({
        category = "",
        time = "",
        language = "",
        rate = "",
        year = "",
        search = "",
        pageNumber = "",
    }) =>
    async (dispatch) => {
        try {
            dispatch({ type: moviesConstants.MOVIES_LIST_REQUEST });
            const response = await moviesAPIs.getAllMoviesService(
                category,
                time,
                language,
                rate,
                year,
                search,
                pageNumber
            );
            dispatch({
                type: moviesConstants.MOVIES_LIST_SUCCESS,
                payload: response,
            });
        } catch (error) {
            ErrorsAction(error, dispatch, moviesConstants.MOVIES_LIST_FAIL);
        }
    };

// Get random movies action
export const getRandomMoviesAction = () => async (dispatch) => {
    try {
        dispatch({ type: moviesConstants.MOVIES_RANDOM_REQUEST });
        const response = await moviesAPIs.getRandomMoviesService();
        dispatch({
            type: moviesConstants.MOVIES_RANDOM_SUCCESS,
            payload: response,
        });
    } catch (error) {
        ErrorsAction(error, dispatch, moviesConstants.MOVIES_RANDOM_FAIL);
    }
};

// Get random by id action
export const getMovieByIdAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: moviesConstants.MOVIE_DETAILS_REQUEST });
        const response = await moviesAPIs.getMovieByIdService();
        dispatch({
            type: moviesConstants.MOVIE_DETAILS_SUCCESS,
            payload: response,
        });
    } catch (error) {
        ErrorsAction(error, dispatch, moviesConstants.MOVIE_DETAILS_FAIL);
    }
};

// Get top rated movie action
export const getTopRatedMovieAction = () => async (dispatch) => {
    try {
        dispatch({ type: moviesConstants.MOVIE_TOP_RATED_REQUEST });
        const response = await moviesAPIs.getTopRatedMoviesService();
        dispatch({
            type: moviesConstants.MOVIE_TOP_RATED_SUCCESS,
            payload: response,
        });
    } catch (error) {
        ErrorsAction(error, dispatch, moviesConstants.MOVIE_TOP_RATED_FAIL);
    }
};
