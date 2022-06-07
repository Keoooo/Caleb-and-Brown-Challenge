import React from "react";
import { BiError } from "react-icons/bi";

const ErrorNoData = () => {
  return (
    <div className=" w-60 h-60 mr-3 rounded-lg bg-red-100 p-4">
      <div className="flex justify-center">
        <div className="flex-shrink-0"></div>
        <div className="ml-3">
          <BiError className="text-black" />

          <h3 className="text-sm font-medium text-red-800">
            There was an error fetching this data
          </h3>
          <h3 className="text-sm mt-2 font-medium text-red-800">
            Please Contact site admin
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ErrorNoData;
