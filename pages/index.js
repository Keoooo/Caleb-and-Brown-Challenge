import CoinTable from "../components/Tables/CoinTable";
import Pagnation from "../components/Pagnation/Pagnation";
import SearchBar from "../components/UI/SearchBar";
import React, { useState, useEffect } from "react";

export default function Home({ data }) {
  //CONSTANTS
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const coinData = data.slice(indexOfFirstCoin, indexOfLastCoin);

  // CHANGE PAGE FUNCTION
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className=" bg-companyBranding">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-companySecondary text-2xl uppercase pt-10">
          Caleb and Brown Challenge
        </h1>
        <SearchBar coinData={data} />
        <CoinTable coinData={coinData} />
        <Pagnation
          coinsPerPage={coinsPerPage}
          paginate={paginate}
          totalCoins={data.length}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  try {
    const respone = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=%2024h"
    );
    const data = await respone.json();
    if (!data) {
      return { notFound: true };
    }
    return { props: { data } };
  } catch (error) {
    return { notFound: true };
  }
};

//--------[*]   Provide an error state if the call fails - notFound - will redirect 404 page.
//--------[*]   Display a paginated list of Cryptocurrencies -- see <Pagnation/>
