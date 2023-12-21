import React, { useEffect } from "react";
import SideBar from "../SideBar";
import Table2 from "../../../components/Table2";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import { Empty } from "./../../../components/notfications/Empty";
import {
    deleteUserAction,
    getAllUsersAction,
} from "../../../redux/actions/userActions";
import Loader from "../../../components/notfications/Loader";

function Users() {
    const dispatch = useDispatch();

    const { isLoading, isError, users } = useSelector(
        (state) => state.adminGetAllUsers
    );
    // Delete
    const { isError: deleteError, isSuccess } = useSelector(
        (state) => state.adminDeleteUser
    );

    // Delete movies handler
    const deleteMoviesHandler = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            dispatch(deleteUserAction(id));
        }
    };

    // useEffect
    useEffect(() => {
        dispatch(getAllUsersAction());
        if (isError || deleteError) {
            toast.error(isError || deleteError);
            dispatch({
                type: isError ? "GET_ALL_USERS_RESET" : "DELETE_USER_RESET",
            });
        }
    }, [dispatch, isError, deleteError, isSuccess]);
    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold">Users</h2>
                {isLoading ? (
                    <Loader/>
                ) : users?.length > 0 ? (
                    <Table2
                        data={users}
                        users={true}
                        onDeleteFunction={deleteMoviesHandler}
                    />
                ) : (
                    <Empty message="You dont have any user" />
                )}
            </div>
        </SideBar>
    );
}

export default Users;
