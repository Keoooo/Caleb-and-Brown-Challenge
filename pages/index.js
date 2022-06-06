import CoinTable from "../components/Tables/CoinTable";
import Pagnation from "../components/Pagnation/Pagnation";
import SearchBar from "../components/UI/SearchBar";
import TrendingTable from "../components/Tables/TrendingTable";
import VolumeTrendingTable from "../components/Tables/VolumeTrendingTable";
import GlobalMarketTable from "../components/Tables/GlobalMarketTable";
import Nav from "../components/Layout/Nav";
import Tabs from "../components/Tabs/Tabs";
import React, { useState, useEffect } from "react";

//-------[*]   Provide an error state if the call fails - notFound - will redirect 404 page.
//-------[*]   Display a paginated list of Cryptocurrencies -- see <Pagnation/>
// ------[*]   Added Loading State. And loading Spinner. fetched data with vanilla react so I can implement feature.
// ------[*]   Added Error State. Passed as prop to "TrendingTable" will display pulsating error message

export default function Home({ data, globalData }) {
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

  console.log(data);
  // CHANGE PAGE FUNCTION
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Toggle Tabs Fnc
  const toggle = (val) => {
    setTrendingCoins(!val);
  };

  useEffect(() => {
    setLoadingTrending(true);
    const fetchSearchTrending = () => {
      fetch(`https://api.coingecko.com/api/v3/search/trending`)
        .then((respone) => respone.json())
        .then((data) => {
          setTrendingData(data.coins);
          setLoadingTrending(false);
        })
        .catch((error) => {
          setTrendingError(true);
          setLoadingTrending(false);
          console.error("Error:", error);
        });
    };

    fetchSearchTrending();
  }, []);

  return (
    <div className=" bg-gray-100  min-w-full  h-full  ">
      <Nav coinData={data} />
      <div className="flex flex-col  justify-center   items-center  ">
        <Tabs toggle={toggle} tabState={trendingCoins} />

        {!trendingCoins ? (
          <div className="flex flex-col sm:flex-row sm:h-screen  ">
            <TrendingTable
              coinData={trendingData}
              isLoading={loadingTrending}
              errorTrending={trendingError}
            />
            <VolumeTrendingTable coinData={data} />
          </div>
        ) : (
          <>
            <GlobalMarketTable globalData={globalData} />
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

export async function getStaticProps() {
  try {
    const [coinMarketData, globalDefiData] = await Promise.all([
      fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=%2024h`
      ),
      fetch(
        `https://api.coingecko.com/api/v3/global/decentralized_finance_defi`
      ),
    ]);

    const [coinMarketDataJson, globalDefiDataJson] = await Promise.all([
      coinMarketData.json(),
      globalDefiData.json(),
    ]);

    if (!coinMarketDataJson || !globalDefiDataJson) {
      return { notFound: true };
    }
    return {
      props: { data: coinMarketDataJson, globalData: globalDefiDataJson },
    };
  } catch (error) {
    return { notFound: true };
  }
}
