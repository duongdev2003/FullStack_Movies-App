import * as yup from "yup";

// Login validation
const LoginValidation = yup.object().shape({
    email: yup.string().email().required("Email is required").trim(),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must be less than 20 characters")
        .matches(/(?=.*[0-9])/, "Password must contain a number"),
});

// Register validation
const RegisterValidation = yup.object().shape({
    email: yup.string().email().required("Email is required").trim(),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters")
        .max(20, "Password must be less than 20 characters")
        .matches(/(?=.*[0-9])/, "Password must contain a number"),
    fullName: yup
        .string()
        .required("Name is required")
        .max(20, "Full name must be at most 20 characters")
        .matches(/^[a-zA-Z ]*$/, "Full name must contain only letters"),
});


export { LoginValidation, RegisterValidation };
