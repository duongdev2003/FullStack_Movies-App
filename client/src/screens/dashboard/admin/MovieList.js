import React, {useEffect} from "react";
import SideBar from './../SideBar';
import Table from './../../../components/Table';
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import {getAllMoviesAction} from "../../../redux/actions/moviesActions";
import Loader from "../../../components/notfications/Loader";
import {Empty} from "../../../components/notfications/Empty";
import {TbPlayerTrackNext, TbPlayerTrackPrev} from "react-icons/tb";

function MovieList() {
    const dispatch = useDispatch();
    const sameClass =
        "text-white p-2 rounded font-semibold border-2 border-subMain hover:bg-subMain";
    const {isLoading, isError, movies, pages, page} = useSelector(
        (state) => state.getAllMovies
    );
    useEffect(() => {
        // Error
        if(isError){
            toast.error(isError)
        }
        dispatch(getAllMoviesAction({}))
    }, [dispatch, isError]);
    // Pagination next and Prev pages
    const nextPage = () => {
        dispatch(
            getAllMoviesAction({
                pageNumber: page + 1,
            })
        );
    };
    const prevPage = () => {
        dispatch(
            getAllMoviesAction({
                pageNumber: page - 1,
            })
        );
    };

    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">Movie List</h2>
                    <button
                        className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded">
                        Delete All
                    </button>
                </div>
                {isLoading ? (
                    <Loader />
                ) : movies.length > 0 ? (
                    <>
                        <Table data={movies} admin={true} />
                        {/* Loading More */}
                        <div className="w-full flex-rows gap-6 my-5">
                            <button
                                onClick={prevPage}
                                disabled={page === 1}
                                className={sameClass}
                            >
                                <TbPlayerTrackPrev className="text-xl" />
                            </button>

                            <button
                                onClick={nextPage}
                                disabled={page === pages}
                                className={sameClass}
                            >
                                <TbPlayerTrackNext className="text-xl" />
                            </button>
                        </div>
                    </>
                ) : (
                    <Empty message="You have no movies" />
                )}
            </div>
        </SideBar>
    );
}

export default MovieList;
