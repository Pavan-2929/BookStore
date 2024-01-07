import React from "react";

const Spinner = () => {
  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-75 bg-gray-500">
      <div className="animate-spin w-16 h-16 border-t-4 border-blue-500 border-solid rounded-full"></div>
    </div>
  );
};

export default Spinner;
