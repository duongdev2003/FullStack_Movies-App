import React, { useEffect } from "react";
import Layout from "./../layout/Layout";
import { Input } from "../components/UsedInputs";
import { Link, useNavigate } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { InlineError } from "../components/notfications/Error";
import toast from "react-hot-toast";
import { registerAction } from "../redux/actions/userActions";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterValidation } from "../components/validation/userValidation";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, isError, userInfo, isSuccess } = useSelector(
        (state) => state.userRegister
    );

    // Validate user
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(RegisterValidation),
    });

    // On submit
    const onSubmit = (data) => {
        dispatch(registerAction(data));
        // console.log(data);
    };

    // useEffect
    useEffect(() => {
        if (userInfo?.isAdmin) {
            navigate("/dashboard");
        } else if (userInfo) {
            navigate("/profile");
        }
        if (isSuccess) {
            toast.success(`Welcome ${userInfo?.fullName}`);
            dispatch({ type: "USER_REGISTER_RESET" });
        }
        if (isError) {
            toast.error(isError);
            dispatch({ type: "USER_REGISTER_RESET" });
        }
    }, [userInfo, isSuccess, isError, navigate, dispatch]);
    return (
        <Layout>
            <div className="container mx-auto px-2 my-24 flex-colo">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full 2xl:w-2/5 gap-8 flex-colo p-8 sm:p-14 md:w-3/5 bg-dry  rounded-lg border border-border"
                >
                    <img
                        src="/images/logo.png"
                        alt="logo"
                        className="w-full h-12 object-contain"
                    />
                    <div className="w-full">
                        <Input
                            label="FullName"
                            placeholder="Netflixo React Tailwind"
                            type="text"
                            name="fullName"
                            register={register("fullName")}
                            bg={true}
                        />
                        {errors.fullName && (
                            <InlineError text={errors.fullName.message} />
                        )}
                    </div>
                    <div className="w-full">
                        <Input
                            label="Email"
                            placeholder="netflixo@gmail.com"
                            type="email"
                            name="email"
                            register={register("email")}
                            bg={true}
                        />
                        {errors.email && (
                            <InlineError text={errors.email.message} />
                        )}
                    </div>
                    <div className="w-full">
                        <Input
                            label="Password"
                            placeholder="********"
                            type="password"
                            name="password"
                            register={register("password")}
                        />
                        {errors.password && (
                            <InlineError text={errors.password.message} />
                        )}
                    </div>
                    {/* <div className="w-full">
                        <Input
                            label="Confrim Password"
                            placeholder="********"
                            type="confirmpassword"
                            name="confirmpassword"
                            register={register("confirmpassword")}
                        />
                        {errors.confirmpassword && (
                            <InlineError text={errors.confirmpassword.message} />
                        )}
                    </div> */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full"
                    >
                        {/* If loading show loading */}
                        {isLoading ? (
                            "Loading..."
                        ) : (
                            <>
                                <FiLogIn /> Sign Up
                            </>
                        )}
                    </button>
                    <p className="text-center text-border">
                        Already have an account?
                        <Link
                            to="/login"
                            className="text-dryGray font-semibold ml-2"
                        >
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </Layout>
    );
}

export default Register;
