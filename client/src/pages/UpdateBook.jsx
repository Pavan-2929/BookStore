import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

function UpdateBook() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/book/${id}`).then((response) => {
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setPublishYear(response.data.publishYear);
    });
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = { title, author, publishYear };
    setLoading(true);

    axios
      .put(`http://localhost:3000/book/update/${id}`, formData)
      .then(() => {
        setLoading(false);
        navigate("/");
        enqueueSnackbar("Book Updated Successfully", {variant:'success'})
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        enqueueSnackbar("Something Went Wrong", {variant: 'error'})
      });
  };

  return (
    <div>
      <div className="my-10">
        <BackButton />
      </div>
      <div className="max-h-screen flex flex-col justify-center items-center ">
        <div className="bg-gray-200 p-8 rounded-md shadow-md w-full max-w-lg ">
          <h1 className="text-3xl font-bold mb-6">Update a Book</h1>
          {loading ? <Spinner /> : ""}
          <form onSubmit={handleUpdate} className="space-y-4 ">
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
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateBook;
