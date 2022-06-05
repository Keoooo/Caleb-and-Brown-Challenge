import React, { useEffect } from "react";
import { formatDollar, formatPercent } from "../../utils/helpers";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/router";

const TrendingTable = ({ coinData, isLoading, trendingError }) => {
  const router = useRouter();

  useEffect(() => {}, [coinData]);

  if (trendingError) {
    return (
      <div className="max-h-screen text-companySecondary animate-pulse text-4xl mt-10">
        <p>Error Please Return </p>
      </div>
    );
  }

  return (
    <table className="  m-2  overflow-x-auto divide-gray-300 ">
      <thead className="bg-gray-50  ">
        <tr>
          <th
            scope="col "
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            <p>Coin Geckho Top 7 Search Trending </p>
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Market Cap Rank
          </th>
        </tr>
      </thead>
      {coinData && !isLoading ? (
        <tbody className="divide-y divide-gray-200 bg-white">
          {coinData.map((coin) => (
            <tr
              key={coin.item.id}
              onClick={() => {
                router.push({
                  pathname: "/detailed/[id]",
                  query: { id: coin.item.id },
                });
              }}
              className="hover:bg-gray-100 "
            >
              <td className="whitespace-nowrap  cursor-pointer py-4 pl-4 pr-3 text-sm sm:pl-6">
                <div className="flex items-center">
                  {console.log(coin.item)}
                  <div className="h-10 w-10 flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={coin.item.small}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-gray-500 uppercase ">
                      {coin.item.id}{" "}
                      <span className="text-xs">{`(${coin.item.symbol})`}</span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <p className="text-gray-500 hover:text-gray-900">
                  {coin.item.market_cap_rank}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <td className="flex h-screen text-companySecondary s ">
          <AiOutlineLoading3Quarters className="animate-spin mt-3 mr-4" />
          <p className="mt-3">Loading.... </p>
        </td>
      )}
    </table>
  );
};

export default TrendingTable;
