import React from "react";
import { Link } from "react-router-dom";

function BackButton({ destination = "/" }) {
  return (
    <div style={{ margin: "10px" }}>
      <Link
        to={destination}
        style={{
          padding: "10px",
          backgroundColor: "#3498db",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back
      </Link>
    </div>
  );
}

export default BackButton;
