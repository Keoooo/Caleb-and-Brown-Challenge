import React, { useState } from "react";
import { useRouter } from "next/router";

const SearchBar = ({ coinData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  console.log(coinData);
  return (
    <>
      <input
        type="search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="form-control w-3/6 relative flex-auto block  px-3 py-1.5 text-base font-normal text-lime-400 bg-secondaryDark bg-clip-padding border border-solid border-lime-400 rounded-lg p-10 transition ease-in-out m-0 focus:text-lime-400 focus:bg-secondaryDark/30 focus:border-lime-400 focus:outline-none"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
      />
      <div className="bg-white max-h-32 w-3/6 mt-2 overflow-scroll  rounded-md">
        <ul role="list" className="divide-y  z-10 divide-gray-200">
          {coinData
            .filter((val) => {
              if (searchTerm == "") {
                return null;
              } else if (
                val.id.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              } else if (
                val.symbol.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((item, indx) => {
              return (
                <li
                  key={item.id}
                  onClick={() => {
                    router.push({
                      pathname: "/detailed/[id]",
                      query: { id: item.id },
                    });
                  }}
                  className="px-6 py-4 flex cursor-pointer hover:bg-gray-100"
                >
                  <img
                    className="h-5 w-5 mr-3  rounded-full"
                    src={item.image}
                    alt=""
                  />
                  <p className="uppercase">{item.id}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;
