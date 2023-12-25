import React, {useEffect, useState} from "react";
import Layout from "./../layout/Layout";
import Filters from "./../components/Filters";
import Movie from "./../components/Movie";
import { Movies } from "../data/MoviesData";
import { CgSpinner } from "react-icons/cg";
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import * as movies from "../redux/reducers/MoviesReducers";
import {getAllMoviesAction} from "../redux/actions/moviesActions";
import Loader from "../components/notfications/Loader";
import {RiMovie2Line} from "react-icons/ri";
function MoviesPage() {
const dispatch = useDispatch();
const sameClass = "w-full gap-6 flex-colo min-h-screen"
    // All movies
    const {isLoading, isError, movies, pages, page} = useSelector((state) => state.getAllMovies);
    // Get all categories
    const { categories } = useSelector((state) => state.categoryGetAll);
    // useEffect
    useEffect(() => {
    // Error
        if(isError){
            toast.error(isError)
        }
    }, [dispatch, isError]);

    return (
        <Layout>
            <div className="min-height-screen container mx-auto px-2 my-6">
                <Filters categories={categories} />
                <p className="text-lg font-medium my-6">
                    Total{" "}
                    <span className="font-bold text-subMain">
                        {movies ? movies?.length : 0}
                    </span>{" "}
                    items Found
                </p>
                {
                    isLoading ? (
                        <div className={sameClass}>
                            <Loader/>
                        </div>
                    ) : movies?.length > 0 ? (
                        <>
                            <div
                                className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                                {Movies.slice(0, page)?.map((movie, index) => (
                                    <Movie key={index} movie={movie}/>
                                ))}
                            </div>
                            {/* Loading More */}
                            <div className="w-full flex-colo md:my-20 my-10"></div>
                        </>
                    ):(
                        <div className={sameClass}>
                            <div className="w-24 h-24 p-5 rounded-full mb-4 bg-dry text-subMain text-4xl flex-colo">
                                <RiMovie2Line/>
                            </div>
                            <p className="text-border text-sm">It seem's like we dont have any movie</p>
                        </div>
                    )
                }

            </div>
        </Layout>
    );
}

export default MoviesPage;
