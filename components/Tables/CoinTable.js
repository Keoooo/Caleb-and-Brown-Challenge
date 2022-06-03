import React from "react";
import { formatDollar, formatPercent } from "../../utils/helpers";

const CoinTable = ({ coinData }) => {
  return (
    <table className="max-w-min mt-10 rounded-lg divide-y divide-gray-300 ">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            Coin Name
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Price
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Low 24h
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            High 24h
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Price Change 24h
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Market cap
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Market cap change 24h
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            All Time High
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            ATH Change %
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {coinData.map((coin) => (
          <tr key={coin.id} className="hover:bg-gray-100 cursor-pointer">
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
              <div className="flex items-center">
                <div className="h-10 w-10 flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={coin.image}
                    alt=""
                  />
                </div>
                <div className="ml-4">
                  <div className="font-medium text-gray-900">
                    {`#${coin.market_cap_rank}`}
                  </div>
                  <div className="text-gray-500 uppercase ">{coin.id}</div>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <p className="text-gray-500 hover:text-gray-900">
                {formatDollar(coin.current_price)}
              </p>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <p className="text-gray-500 hover:text-gray-900">
                {formatDollar(coin.high_24h)}
              </p>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <p className="text-gray-500 hover:text-gray-900">
                {formatDollar(coin.low_24h)}
              </p>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm hover:text-gray-900 text-gray-500">
              {formatPercent(coin.price_change_24h)}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <p className="whitespace-nowrap px-3 py-4 text-sm hover:text-gray-900 text-gray-500">
                {formatDollar(coin.market_cap)}
              </p>
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <p className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 hover:text-gray-900">
                {formatPercent(coin.market_cap_change_percentage_24h)}
              </p>
            </td>
            <td className="whitespace-nowrap  px-3 py-4 text-sm text-gray-500 hover:text-gray-900">
              <p className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {formatDollar(coin.ath)}
              </p>
            </td>
            <td className="whitespace-nowrap  px-3 py-4 text-sm text-gray-500 hover:text-gray-900">
              <p className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {formatPercent(coin.atl_change_percentage)}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoinTable;
