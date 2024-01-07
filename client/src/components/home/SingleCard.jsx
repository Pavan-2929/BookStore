import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaInfo, FaEdit, FaTrash, FaEye } from "react-icons/fa"; // Import icons from react-icons
import BookModel from "./BookModel";

function SingleCard({ book }) {
  const [showModel, setShowModel] = useState(false);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-5 mb-4">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">{book.title}</h2>
        <p className="text-gray-700 mb-2">{book.author}</p>
        <p className="text-gray-700 mb-2">Publish-Year: {book.publishYear}</p>
        <div className="flex items-center space-x-4 justify-evenly mt-6">
          <div onClick={() => setShowModel(true)} className="cursor-pointer">
            <FaEye size={20} />
          </div>
          <Link
            to={`/book/details/${book._id}`}
            className="text-blue-500 hover:underline"
          >
            <FaInfo size={20} />
          </Link>
          <Link
            to={`/book/update/${book._id}`}
            className="text-green-500 hover:underline"
          >
            <FaEdit size={20} />
          </Link>
          <Link
            to={`/book/delete/${book._id}`}
            className="text-red-500 hover:underline"
          >
            <FaTrash size={20} />
          </Link>
        </div>
      </div>
      {showModel && (
        <BookModel book={book} onClose={() => setShowModel(false)} />
      )}
    </div>
  );
}

export default SingleCard;
