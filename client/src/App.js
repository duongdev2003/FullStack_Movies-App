import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./screens/AboutUs";
import NotFound from "./screens/NotFound";
import HomeScreen from "./screens/HomeScreen";
import ContactUs from "./screens/ContactUs";
import MovesPage from "./screens/Movies";
import SingleMovie from "./screens/SingleMovie";
import WatchPage from "./screens/WatchPage";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/dashboard/Profile";
import Aos from "aos";
import "aos/dist/aos.css";
import Password from "./screens/dashboard/Password";
import FavoritesMovies from "./screens/dashboard/FavoritesMovies";
import MovieList from "./screens/dashboard/admin/MovieList";
import Dashboard from "./screens/dashboard/admin/Dashboard";
import Categories from "./screens/dashboard/admin/Categories";
import Users from "./screens/dashboard/admin/Users";
import AddMovie from "./screens/dashboard/admin/AddMovie";
import ScrollOnTop from "./ScrollOnTop";
import DrawerContext from "./context/DrawerContext";
import ToastContainer from "./components/notfications/ToastContainer";
import { AdminProtectedRouter, ProtectedRouter } from "./ProtectedRouter";
import { useDispatch } from "react-redux";
import { getAllCategoriesAction } from "./redux/actions/categoriesActions";

function App() {
    Aos.init();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCategoriesAction());
    }, [dispatch]);
    return (
        <>
            <ToastContainer />
            <DrawerContext>
                <ScrollOnTop>
                    <Routes>
                        {/* ************ PUBLIC ROUTES ************ */}
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                        <Route path="/movies" element={<MovesPage />} />
                        <Route path="/movie/:id" element={<SingleMovie />} />
                        <Route path="/watch/:id" element={<WatchPage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="*" element={<NotFound />} />
                        {/* ******** PUBLIC PRIVATE ROUTES ******** */}
                        <Route element={<ProtectedRouter />}>
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/password" element={<Password />} />
                            <Route
                                path="/favorites"
                                element={<FavoritesMovies />}
                            />
                            {/* ************ ADMIN ROUTES ************ */}
                            <Route element={<AdminProtectedRouter />}>
                                <Route
                                    path="/movieslist"
                                    element={<MovieList />}
                                />
                                <Route
                                    path="/dashboard"
                                    element={<Dashboard />}
                                />
                                <Route
                                    path="/categories"
                                    element={<Categories />}
                                />
                                <Route path="/users" element={<Users />} />
                                <Route
                                    path="/addmovie"
                                    element={<AddMovie />}
                                />
                            </Route>
                        </Route>
                    </Routes>
                </ScrollOnTop>
            </DrawerContext>
        </>
    );
}

export default App;
