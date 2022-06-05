import React, { useEffect } from "react";
import { formatDollar, formatPercent } from "../../utils/helpers";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useRouter } from "next/router";

// ------[*]   Sort by Volume Traded.

const TrendingTable = ({ coinData }) => {
  const router = useRouter();

  return (
    <div className="max-h-screen  overflow-auto">
      <table className="overflow-x-auto   m-2   divide-gray-300 ">
        <thead className="bg-gray-50 m-2  ">
          <tr>
            <th
              scope="col "
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              <p>Coin Name</p>
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Market Cap Rank
            </th>
            <th
              scope="col"
              className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
            >
              Total Volume
            </th>
          </tr>
        </thead>
        {coinData ? (
          <tbody className="divide-y   divide-gray-200 bg-white">
            {coinData
              .sort((a, b) => (a.total_volume < b.total_volume ? 1 : -1))
              .map((coin) => (
                <tr
                  key={coin.id}
                  onClick={() => {
                    router.push({
                      pathname: "/detailed/[id]",
                      query: { id: coin.id },
                    });
                  }}
                  className="hover:bg-gray-100  overflow-scroll "
                >
                  <td className="whitespace-nowrap cursor-pointer py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src={coin.image}
                          alt=""
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-gray-500 uppercase ">
                          {coin.id}
                          <span className="text-xs">{`(${coin.symbol})`}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <p className="text-gray-500 hover:text-gray-900">
                      {coin.market_cap_rank}
                    </p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    <p className="text-gray-500 hover:text-gray-900">
                      {formatDollar(coin.total_volume)}
                    </p>
                  </td>
                </tr>
              ))}
          </tbody>
        ) : (
          <td className="flex  text-companySecondary  ">
            <AiOutlineLoading3Quarters className="animate-spin mt-3 mr-4" />
            <p className="mt-3">Loading.... </p>
          </td>
        )}
      </table>
    </div>
  );
};

export default TrendingTable;
