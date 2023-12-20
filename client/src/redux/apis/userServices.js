import Axios from "./Axios";

// Register new user API call
const registerService = async (user) => {
    const { data } = await Axios.post("/users", user);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
};

// Logout user Function
const logoutService = () => {
    localStorage.removeItem("userInfo");
    return null;
};

// Login user API call
const loginService = async (user) => {
    const { data } = await Axios.post("/users/login", user);
    if (data) {
        localStorage.setItem("userInfo", JSON.stringify(data));
    }
    return data;
};

// Update profile API call
const updateProfileService = async (user, token) => {
    const { data } = await Axios.put("/users", user, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (data) {
        localStorage.setItem("/users", user);
    }
    return data;
};

// Delete profile API call
const deleteProfileService = async (token) => {
    const { data } = await Axios.delete("/users", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    if (data) {
        localStorage.removeItem("userInfo");
    }
    return data;
};

// Change password API call
const changePasswordService = async (passwords, token) => {
    const { data } = await Axios.put("/users/password", passwords, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

// Get all favorite movies
const getFavoriteMovies = async (token) => {
    const { data } = await Axios.get("/users/favorites", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

// Delete all favorite movies
const deleteFavoriteMovies = async (token) => {
    const { data } = await Axios.delete("/users/favorites", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return data;
};

export {
    registerService,
    logoutService,
    loginService,
    updateProfileService,
    deleteProfileService,
    changePasswordService,
    getFavoriteMovies,
    deleteFavoriteMovies,
};
