import React, { useEffect } from "react";
import SideBar from "./SideBar";
import Table from "../../components/Table";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "./../../components/notfications/Loader";
import {
    deleteFavoriteMoviesAction,
    getFavoritesMoviesAction,
} from "../../redux/actions/userActions";
import { Empty } from "../../components/notfications/Empty";

function FavoritesMovies() {
    const dispatch = useDispatch();
    const { isLoading, isError, likedMovies } = useSelector(
        (state) => state.userGetFavoriteMovies
    );

    // Delete
    const {
        isLoading: deleteLoading,
        isError: deleteError,
        isSuccess,
    } = useSelector((state) => state.userDeleteFavoriteMovies);

    // Delete movies handler
    const deleteMoviesHandler = () => {
        window.confirm("Are you sure you want to delete all movies?") &&
            dispatch(deleteFavoriteMoviesAction());
    };

    // useEffect
    useEffect(() => {
        dispatch(getFavoritesMoviesAction());
        if (isError || deleteError) {
            toast.error(isError || deleteError);
            dispatch({
                type: isError
                    ? "GET_FAVORITE_MOVIES_RESET"
                    : "DELETE_FAVORITE_MOVIES_RESET",
            });
        }
    }, [dispatch, isError, deleteError, isSuccess]);

    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">Favorites Movies</h2>
                    {likedMovies?.length > 0 && (
                        <button
                            disabled={deleteLoading}
                            onClick={deleteMoviesHandler}
                            className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded"
                        >
                            {deleteLoading ? "Deleting..." : "Delete All"}
                        </button>
                    )}
                </div>
                {isLoading ? (
                    <Loader />
                ) : likedMovies.length > 0 ? (
                    <Table data={likedMovies} admin={false} />
                ) : (
                    <Empty message="You have no favorites movie" />
                )}
            </div>
        </SideBar>
    );
}

export default FavoritesMovies;
