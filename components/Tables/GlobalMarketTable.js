import React from "react";
import { formatDollar } from "../../utils/helpers";

//---------[x]  GLOBAL MARKET COMPONENT

const GlobalMarketTable = ({ globalData }) => {
  const { data } = globalData;
  console.log(data);
  return (
    <div className="bg-gray-50 	 text-gray-500 mb-3 mx-1  uppercase">
      <table>
        <caption className="text-gray-900 ">Global Market Overview</caption>
        <thead className="bg-gray-50  ">
          <tr>
            <th
              scope="col "
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              <p>Defi Market Cap:</p>
            </th>
            <th
              scope="col "
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              <p>Eth Market Cap:</p>
            </th>
            <th
              scope="col "
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              <p>Trading Volume 24h:</p>
            </th>
            <th
              scope="col "
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              <p>Defi Market Cap:</p>
            </th>
            <th
              scope="col "
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
            >
              <p>Top Defi Coin:</p>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200  bg-white">
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p className="text-gray-500 hover:text-gray-900">
              {formatDollar(data.defi_market_cap)}
            </p>
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p className="text-gray-500 hover:text-gray-900">
              {formatDollar(data.eth_market_cap)}
            </p>
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p className="text-gray-500 hover:text-gray-900">
              {formatDollar(data.trading_volume_24h)}
            </p>
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p className="text-gray-500 hover:text-gray-900">
              {formatDollar(data.defi_market_cap)}
            </p>
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p className="text-gray-500 hover:text-gray-900">
              {data.top_coin_name}
            </p>
          </td>
        </tbody>
      </table>
    </div>
  );
};

export default GlobalMarketTable;
