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
