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

const updateProfileService = async (user) => {
    const { data } = await Axios.put("/users/profile", user);
    if (data) {
        localStorage.setItem("/users", user);
    }
    return data;
};

export { registerService, logoutService, loginService, updateProfileService };

// Update profile API call
