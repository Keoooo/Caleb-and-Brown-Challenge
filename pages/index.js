import CoinTable from "../components/Tables/CoinTable";
import Pagnation from "../components/Pagnation/Pagnation";
import SearchBar from "../components/UI/SearchBar";
import TrendingTable from "../components/Tables/TrendingTable";
import Tabs from "../components/Tabs/Tabs";
import React, { useState, useEffect } from "react";

//--------[*]   Provide an error state if the call fails - notFound - will redirect 404 page.
//-------[*]   Display a paginated list of Cryptocurrencies -- see <Pagnation/>
// ------[*]   Added Loading State. And loading Spinner. fetched data with vanilla react so I can implement feature.
// ------[*]   Added Error State. Passed as prop to "TrendingTable" will display pulsating error message

export default function Home({ data }) {
  //CONSTANTS
  //pagnations const
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const coinData = data.slice(indexOfFirstCoin, indexOfLastCoin);
  // sets if user is on trending tab
  const [trendingCoins, setTrendingCoins] = useState(true);
  const [trendingData, setTrendingData] = useState();
  const [trendingError, setTrendingError] = useState(false);
  const [loadingTrending, setLoadingTrending] = useState(false);

  // CHANGE PAGE FUNCTION
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Toggle Tabs Fnc
  const toggle = (val) => {
    setTrendingCoins(!val);
  };

  useEffect(() => {
    const fetchTrending = () => {
      setLoadingTrending(true);
      fetch(`https://api.coingecko.com/api/v3/search/trending`)
        .then((respone) => respone.json())
        .then((data) => {
          setTrendingData(data.coins);
          console.log(data.coins);
          setLoadingTrending(false);
        })
        .catch((error) => {
          setTrendingError(true);
          setLoadingTrending(false);
          console.error("Error:", error);
        });
    };

    fetchTrending();
  }, []);

  return (
    <div className=" bg-companyBranding">
      <div className="flex flex-col justify-center items-center pb-10 ">
        <h1 className="text-companySecondary text-2xl uppercase pt-10">
          Caleb and Brown Challenge
        </h1>
        <Tabs toggle={toggle} tabState={trendingCoins} />

        {!trendingCoins ? (
          <TrendingTable
            coinData={trendingData}
            isLoading={loadingTrending}
            errorTrending={trendingError}
          />
        ) : (
          <>
            <SearchBar coinData={data} />
            <CoinTable coinData={coinData} />
            <Pagnation
              coinsPerPage={coinsPerPage}
              paginate={paginate}
              totalCoins={data.length}
              currentPage={currentPage}
            />
          </>
        )}
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
