import React from "react";

const Pagnation = ({ coinsPerPage, totalCoins, paginate, currentPage }) => {
  const pageNumber = [];

  //calculate page numbers Math.ceil to make round numbers
  for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <div className="bg-white px-4 py-3 flex flex-col  justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className=" sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div className=" mr-10">
          <p className="text-sm text-gray-700 ">
            Showing <span className="font-medium">{currentPage}</span> to{" "}
            <span className="font-medium">{pageNumber.length}</span> of{" "}
            <span className="font-medium">{totalCoins}</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <span className="sr-only">Previous</span>
            {/* <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" /> */}
            {pageNumber.map((page) => {
              return (
                <a
                  key={page}
                  href="#"
                  onClick={() => paginate(page)}
                  aria-current="page"
                  className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  {page}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagnation;
