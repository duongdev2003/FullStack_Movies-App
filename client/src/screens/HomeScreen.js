import React, {useEffect} from "react";
import Layout from "./../layout/Layout";
import Banner from "./../components/home/Banner";
import PopularMovies from "./../components/home/PopularMovies";
import Promos from "./../components/home/Promos";
import TopRated from "./../components/home/TopRated";
import {useDispatch, useSelector} from "react-redux";
import {
    getAllMoviesAction,
    getRandomMoviesAction,
    getTopRatedMovieAction,
} from "../redux/actions/moviesActions";
import toast from "react-hot-toast";

function HomeScreen() {
    const dispatch = useDispatch();
    // useSelector
    const {isLoading, isError, movies} = useSelector(
        (state) => state.getRandomMovies
    );
    const {
        isLoading: randomLoading,
        isError: randomError,
        movies: randomMovies,
    } = useSelector((state) => state.getAllMovies);
    const {
        isLoading: topLoading,
        isError: topError,
        movies: topMovies,
    } = useSelector((state) => state.getTopRatedMovie);

    // useEffect
    useEffect(() => {
        // Get random movies
        dispatch(getRandomMoviesAction());
        // Get all movies
        dispatch(getAllMoviesAction({}));
        // Get top rated movies
        dispatch(getTopRatedMovieAction());
        // Error
        if (isError || randomError || topError) {
            toast.error("Something went wrong!");
        }
    }, [dispatch, isError, randomError, topError]);

    return (
        <Layout>
            <div className="container mx-auto min-h-screen px-2 mb-6">
                <Banner movies={movies} isLoading={isLoading}/>
                <PopularMovies movies={randomMovies} isLoading={randomLoading}/>
                <Promos />
                <TopRated movies={topMovies} isLoading={topLoading}/>
            </div>
        </Layout>
    );
}

export default HomeScreen;
