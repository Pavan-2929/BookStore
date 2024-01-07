import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";

function ShowBooks() {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/book/${id}`)
      .then((response) => {
        console.log(response.data);
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="container mx-auto p-4">
      <BackButton />

      <div className="bg-gray-200 p-8 rounded-lg shadow-lg mt-14">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Explore the Book {book.title}
        </h1>

        <div className="bg-white p-6 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Book-ID: {book._id}
          </h2>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Book-Title: {book.title}
          </h2>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Book-Author: {book.author}
          </h2>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Book-Publish: {book.publishYear}
          </h2>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Book-Creation: {new Date(book.createdAt).toLocaleString()}
          </h2>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Last-Updation Time: {new Date(book.updatedAt).toLocaleString()}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ShowBooks;
