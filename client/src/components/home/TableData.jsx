import React from "react";
import { Link } from "react-router-dom";
import { FaInfo, FaEdit, FaTrash } from "react-icons/fa";

function TableData({ books }) {
  return (
    <div>
      <table className="w-full border-collapse border rounded">
        <thead className="bg-gray-400">
          <tr>
            <th className="p-4">No.</th>
            <th className="p-4">Title</th>
            <th className="p-4">Author of Book</th>
            <th className="p-4">Publish-Year</th>
            <th className="p-4">Operation</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr
              key={book._id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{book.title}</td>
              <td className="p-2">{book.author}</td>
              <td className="p-2">{book.publishYear}</td>
              <td className="p-2 space-x-2 font-semibold flex justify-evenly">
                <Link
                  to={`/book/details/${book._id}`}
                  className="text-blue-500 m-2 hover:scale-110 transition-transform"
                >
                  <FaInfo size={20} />
                </Link>
                <Link
                  to={`/book/update/${book._id}`}
                  className="text-green-500 m-2 hover:scale-110 transition-transform"
                >
                  <FaEdit size={20} />
                </Link>
                <Link
                  to={`/book/delete/${book._id}`}
                  className="text-red-500 m-2 hover:scale-110 transition-transform"
                >
                  <FaTrash size={20} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
