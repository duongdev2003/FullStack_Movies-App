import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MovieCasts from "./../components/single/MovieCasts";
import MovieInfo from "./../components/single/MovieInfo";
import MovieRates from "./../components/single/MovieRates";
import Titles from "./../components/Titles";
import { Movies } from "./../data/MoviesData";
import Layout from "./../layout/Layout";
import { BsCollectionFill } from "react-icons/bs";
import Movie from "./../components/Movie";
import ShareMovieModal from "../components/modals/ShareModal";

function SingleMovie() {
    const [modalOpen, setModalOpen] = useState(false);
    const { id } = useParams();
    const movie = Movies.find((movie) => movie.name === id);
    const RelatedMovies = Movies.filter((m) => m.category === movie.category);

    return (
        <Layout>
            <ShareMovieModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                movie={movie}
            />
            <MovieInfo movie={movie} setModalOpen={setModalOpen} />
            <div className="container mx-auto min-h-screen px-2 my-6">
                <MovieCasts />
                {/* Rates */}
                <MovieRates movie={movie} />
                {/* Related */}
                <div className="my-16">
                    <Titles title="Ralated Movies" Icon={BsCollectionFill} />
                    <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6">
                        {RelatedMovies.map((movie, index) => (
                            <Movie key={index} movie={movie} />
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default SingleMovie;
