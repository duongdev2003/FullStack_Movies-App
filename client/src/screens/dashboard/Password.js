import React, { useEffect } from "react";
import SideBar from "./SideBar";
import { Input } from "./../../components/UsedInputs";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { PasswordValidation } from "../../components/validation/userValidation";
import { InlineError } from "../../components/notfications/Error";
import { changePasswordAction } from "../../redux/actions/userActions";
import toast from "react-hot-toast";

function Password() {
    const dispatch = useDispatch();
    const { isLoading, isError, message, isSuccess } = useSelector(
        (state) => state.userChangePassword
    );

    // Validate user
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(PasswordValidation),
    });

    // On submit
    const onSubmit = (data) => {
        dispatch(changePasswordAction(data));
    };

    // useEffect
    useEffect(() => {
        if (isSuccess) {
            dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
        }
        if (isError) {
            toast.error(isError);
            dispatch({ type: "USER_CHANGE_PASSWORD_RESET" });
        }
        if (message) {
            toast.success(message);
            reset();
        }
    }, [isSuccess, isError, message, reset, dispatch]);

    return (
        <SideBar>
            {" "}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6"
            >
                <h2 className="text-xl font-bold">Change Password</h2>
                <div className="w-full">
                    <Input
                        label="Previous Password"
                        placeholder="********"
                        type="password"
                        bg={true}
                        name="oldPassword"
                        register={register("oldPassword")}
                    />
                    {errors.oldPassword && (
                        <InlineError text={errors.oldPassword.message} />
                    )}
                </div>
                <div className="w-full">
                    <Input
                        label="New Password"
                        placeholder="********"
                        type="password"
                        bg={true}
                        name="newPassword"
                        register={register("newPassword")}
                    />
                    {errors.newPassword && (
                        <InlineError text={errors.newPassword.message} />
                    )}
                </div>
                <div className="w-full">
                    <Input
                        label="Confirm Password"
                        placeholder="********"
                        type="password"
                        bg={true}
                        name="confirmPassword"
                        register={register("confirmPassword")}
                    />
                    {errors.confirmPassword && (
                        <InlineError text={errors.confirmPassword.message} />
                    )}
                </div>

                <div className="flex justify-end items-center my-4">
                    <button
                        disabled={isLoading}
                        type="submit"
                        className="bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto"
                    >
                        {isLoading ? "Chaning..." : "Change Password"}
                    </button>
                </div>
            </form>
        </SideBar>
    );
}

export default Password;
