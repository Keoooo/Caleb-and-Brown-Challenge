import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = ({ coinData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  return (
    <div className="flex grow sm:mr-60 justify-center items-center flex-col ">
      <input
        type="search"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        className="form-control w-3/6 relative flex-auto block  px-3 py-1.5 text-base font-normal text-companySecondary  bg-clip-padding border border-solid border-companySecondary rounded-lg p-10 transition ease-in-out m-0 focus:text-companySecondary focus: focus:border-companySecondary focus:outline-none"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="button-addon2"
      />

      <div className="bg-white  max-h-32 w-3/6 mt-2 overflow-scroll  rounded-md">
        <AnimatePresence>
          <ul className="divide-y  z-10 divide-gray-200">
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
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    key={item.id}
                    onClick={() => {
                      router.push({
                        pathname: "/detailed/[id]",
                        query: { id: item.id },
                      });
                    }}
                    className="px-6 py-4  z-10 cursor-pointer hover:bg-gray-100"
                  >
                    <img
                      className="h-5 w-5 mr-3  rounded-full"
                      src={item.image}
                      alt=""
                    />
                    <p className="uppercase">{item.id}</p>
                  </motion.li>
                );
              })}
          </ul>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchBar;
