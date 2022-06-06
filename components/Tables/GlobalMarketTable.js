import React from "react";
import { formatDollar } from "../../utils/helpers";
import { motion } from "framer-motion";

//---------[x]  GLOBAL MARKET COMPONENT

const GlobalMarketTable = ({ globalData }) => {
  const { data } = globalData;

  return (
    <div className="overflow-auto bg-gray-50 rounded-lg  mb-3 shadow-md shadow-companyBranding/50    max-w-full sm:max-w-fit">
      <div className="bg-gray-50   text-gray-600 mb-3  mx-1   uppercase">
        <table className=" ">
          <caption className="hidden sm:table-caption	 text-gray-900  overflow-auto  font-bold tracking-wider	 uppercase ">
            Global Market Overview
          </caption>
          <thead className="bg-gray-50   ">
            <tr>
              <th
                scope="col "
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                <p>Defi Market Cap</p>
              </th>
              <th
                scope="col "
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
              >
                <p>Eth Market Cap</p>
              </th>
              <th
                scope="col "
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  text-gray-900 sm:pl-6"
              >
                <p>Trading Volume 24h</p>
              </th>
              <th
                scope="col "
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  text-gray-900 sm:pl-6"
              >
                <p>Defi Market Cap</p>
              </th>
              <th
                scope="col "
                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold  text-gray-900 sm:pl-6"
              >
                <p>Top Defi Coin</p>
              </th>
            </tr>
          </thead>
          <motion.tbody
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="divide-y divide-gray-200   bg-white"
          >
            <tr>
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
              <td className="whitespace-nowrap  px-3 py-4 text-sm text-gray-500">
                <p className="text-gray-500  hover:text-gray-900">
                  {data.top_coin_name}
                </p>
              </td>
            </tr>
          </motion.tbody>
        </table>
      </div>
    </div>
  );
};

export default GlobalMarketTable;
