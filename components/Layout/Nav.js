import React from "react";
import SearchBar from "../UI/SearchBar";
import Link from "next/link";

const Nav = ({ coinData }) => {
  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-4 bg-companyBranding text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="container-fluid">
          <Link href="/">
            <a className="flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1">
              <img
                className="mr-2"
                src="/caleb-and-brown-logo.svg"
                alt=""
                loading="lazy"
              />
            </a>
          </Link>
        </div>
        {coinData && <SearchBar coinData={coinData} />}
      </div>
    </nav>
  );
};

export default Nav;
