import React, { useState } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";

function CreateBook() {
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = { title, author, publishYear };
    setLoading(true);

    axios
      .post("https://bookstore-backend-mdlm.onrender.com/book", formData)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book created Successfuly", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        enqueueSnackbar("Something went wrong", { variant: "error" });
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="my-10">
        <BackButton />
      </div>
      <div className="max-h-screen flex flex-col justify-center items-center ">
        <div className="bg-gray-200 p-8 rounded-md shadow-md w-full max-w-lg ">
          <h1 className="text-3xl font-bold mb-6">Create a Book</h1>
          {loading ? <Spinner /> : ""}
          <form onSubmit={handleSubmit} className="space-y-4 ">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-600"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter the title of the book"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="author"
                className="block text-sm font-medium text-gray-600"
              >
                Author
              </label>
              <input
                type="text"
                id="author"
                placeholder="Enter the name of the author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="publishYear"
                className="block text-sm font-medium text-gray-600"
              >
                Publish Year
              </label>
              <input
                type="text"
                id="publishYear"
                placeholder="Enter the publish year"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateBook;
