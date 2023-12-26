import Axios from "./Axios";

// ************* PUBLIC APIs ****************
// Get all the movies functions
export const getAllMoviesService = async (
    category,
    time,
    language,
    rate,
    year,
    search,
    pageNumber,
) => {
    const { data } = await Axios.get(
        `/movies?category=${category}&time=${time}&language=${language}&rate=${rate}&year=${year}&search=${search}&pageNumber=${pageNumber}`
    );
    return data;
};

// Get random movies Function
export const getRandomMoviesService = async () => {
    const {data} = await Axios.get(`/movies/random/all`);
    return data;
}

// Get movies by id Function
export const getMovieByIdService = async (id) => {
    const {data} = await Axios.get(`/movies/${id}`);
    return data;
}

// Get top rated movie Function
export const getTopRatedMoviesService = async () => {
    const {data} = await Axios.get(`/movies/rated/top`);
    return data;
}