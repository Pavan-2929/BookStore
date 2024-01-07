import React from "react";
import { Link } from "react-router-dom";
import SingleCard from "./SingleCard";

function CardData({ books }) {
  return (
    <div className="flex flex-wrap -mx-2">
      {books.map((book) => (
        <SingleCard key={book._id} book={book} />
      ))}
    </div>
  );
}

export default CardData;
