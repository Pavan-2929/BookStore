import React, { useState } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

function DeleteBook() {
    const { enqueueSnackbar } = useSnackbar();
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(
        `https://bookstore-backend-mdlm.onrender.com/book/delete/${id}`
      );
      setLoading(false);
      enqueueSnackbar("Book Deleted Successfully", {variant:'success'})
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.log(error);
      enqueueSnackbar("Something Went Wrong", {variant:'error'})
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="max-w-md mx-auto p-8 bg-gray-200 rounded-md shadow-md">
        {loading && <Spinner />}
        <div className="mt-6 text-center">
          <h1 className="text-3xl font-bold mb-4">Confirm Deletion</h1>
          <p className="text-gray-600 mb-6">
            Are you sure you want to delete this book?
          </p>
          <div className="flex justify-around">
            <BackButton />
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 transition-all"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteBook;
