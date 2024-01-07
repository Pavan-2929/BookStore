import React from "react";

function BookModel({ book, onClose }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50 "></div>
      <div className="relative p-6 bg-white rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-[1.2rem] mt-1 text-gray-600">ID: {book._id}</h1>
          </div>
          <div
            className="cursor-pointer text-white bg-red-500 hover:bg-red-600 text-sm font-semibold py-2 px-4 rounded-sm transition-all duration-300"
            onClick={onClose}
          >
            X
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-5 text-gray-900">{book.title}</h2>
        <div className="text-gray-800 mb-4">
          <span className="font-semibold text-lg">Author:</span> {book.author}
        </div>
        <div className="text-gray-800 mb-4">
          <span className="font-semibold text-lg">Publish Year:</span>{" "}
          {book.publishYear}
        </div>
        <div className="text-gray-800 mb-4">
          <span className="font-semibold text-lg">Created At:</span>{" "}
          {new Date(book.createdAt).toLocaleString()}
        </div>
        <div className="text-gray-800 mb-6">
          <span className="font-semibold text-lg">Updated At:</span>{" "}
          {new Date(book.updatedAt).toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default BookModel;
