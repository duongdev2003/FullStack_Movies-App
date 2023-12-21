import React, { useEffect, useState } from "react";
import SideBar from "../SideBar";
import { HiPlus } from "react-icons/hi";
import Table2 from "../../../components/Table2";
import CategoryModal from "../../../components/modals/CategoryModal";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../../components/notfications/Loader";
import { Empty } from "../../../components/notfications/Empty";
import {
    deleteCategoriesAction,
    getAllCategoriesAction,
} from "../../../redux/actions/categoriesActions";
import toast from "react-hot-toast";

function Categories() {
    const [modalOpen, setModalOpen] = useState(false);
    const [category, setCategory] = useState();
    const dispatch = useDispatch();

    // All categories
    const { categories, isLoading } = useSelector(
        (state) => state.categoryGetAll
    );
    // Delete categories
    const { isSuccess, isError } = useSelector((state) => state.categoryDelete);
    const adminDeletecategory = (id) => {
        if (window.confirm("Are you sure you want to delete this category?")) {
            dispatch(deleteCategoriesAction(id));
        }
    };

    const OnEditFunction = (id) => {
        setCategory(id);
        setModalOpen(!modalOpen);
    };
    useEffect(() => {
        // Get all categories
        dispatch(getAllCategoriesAction());
        if (isError) {
            toast.error(isError);
            dispatch({ type: "DELETE_CATEGORY_RESET" });
        }
        if (isSuccess) {
            dispatch({ type: "DELETE_CATEGORY_RESET" });
        }

        if (modalOpen === false) {
            setCategory();
        }
    }, [modalOpen, dispatch, isError, isSuccess]);

    return (
        <SideBar>
            <CategoryModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                category={category}
            />
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">Categories</h2>
                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded"
                    >
                        <HiPlus /> Create
                    </button>
                </div>
                {isLoading ? (
                    <Loader />
                ) : categories?.length > 0 ? (
                    <Table2
                        data={categories}
                        users={false}
                        OnEditFunction={OnEditFunction}
                        onDeleteFunction={adminDeletecategory}
                    />
                ) : (
                    <Empty message="You have no categories" />
                )}
            </div>
        </SideBar>
    );
}

export default Categories;
