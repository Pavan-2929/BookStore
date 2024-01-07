import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner.jsx";
import TableData from "../components/home/TableData.jsx";
import CardData from "../components/home/CardData.jsx";

function Home() {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/book/all")
      .then((response) => {
        setBooks(response.data.allBooks);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container mx-auto mt-8 text-center">
      <div className="text-4xl font-bold mb-6">All Books</div>
      <div className="mb-4">
        <Link
          to={`/book/create`}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Create New Book
        </Link>
      </div>
      <div className="mb-14 bg-gray-200 p-6 m-14 mx-auto max-w-screen-sm rounded-lg">
        <h1 className="text-2xl font-semibold mb-2">
          How do you want to display the books?
        </h1>
        <div className="flex justify-center">
          <button
            onClick={() => setShowType("table")}
            className={`py-2 px-4 rounded ${
              showType === "table"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Table
          </button>
          <button
            onClick={() => setShowType("card")}
            className={`py-2 px-4 rounded ${
              showType === "card"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Card
          </button>
        </div>
      </div>
      {loading ? (
        <div className="text-gray-600">
          <Spinner />
        </div>
      ) : showType === "card" ? (
        <CardData books={books} />
      ) : (
        <TableData books={books} />
      )}
    </div>
  );
}

export default Home;
