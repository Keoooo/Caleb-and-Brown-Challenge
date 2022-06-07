import React from "react";
import { formatDollar, formatPercent } from "../../utils/helpers";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

const CoinTable = ({ coinData }) => {
  const router = useRouter();

  return (
    <div className="overflow-auto   drop-shadow-lg  min-w-full  max-w-full ">
      <div className="align-middle m-auto  flex justify-start sm:align-middle sm:m-auto sm:inline-block sm:px-20 lg:flex lg:justify-center   min-w-full ">
        <div className="shadow   border-gray-500 rounded-lg">
          <table
            data-testid="trending-table-element"
            className=" shadow-md   shadow-companyBranding/50   divide-y divide-gray-300  "
          >
            <thead className="bg-gray-50 min-w-full divide-y divide-gray-300  ">
              <tr>
                <th
                  scope="col "
                  className="py-3.5 pl-4 pr-3 text-left text-ssm font-semibold text-gray-900 sm:pl-6"
                >
                  <p>Coin Name</p>
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-3 a py-3.5 text-left text-sm font-semibold text-gray-900"
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
                  className="px-3  py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Market cap
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  MC change 24h
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
              </tr>
            </thead>
            <tbody className="divide-y  divide-gray-200 bg-white">
              {coinData
                .sort((a, b) => (a.market_cap < b.market_cap ? 1 : -1))
                .map((coin) => (
                  <motion.tr
                    data-testid="coin-table-element"
                    key={coin.symbol}
                    initial={{ opacity: 0, delay: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => {
                      router.push({
                        pathname: "/detailed/[id]",
                        query: { id: coin.id },
                      });
                    }}
                    className="hover:bg-gray-100 cursor-pointer"
                  >
                    <td
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="whitespace-nowrap w-[25%] py-4 pl-4 pr-3 text-sm sm:pl-6"
                    >
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
                          <div className="text-gray-500 uppercase  ">
                            {coin.id}
                          </div>
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
                    <td
                      className={
                        coin.price_change_percentage_24h > 0
                          ? "text-green-500 whitespace-nowrap px-3 py-4 text-sm"
                          : "text-red-500 whitespace-nowrap px-3 py-4 text-sm"
                      }
                    >
                      {formatPercent(coin.price_change_24h)}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <p className="whitespace-nowrap px-3 py-4 text-sm hover:text-gray-900 text-gray-500">
                        {formatDollar(coin.market_cap)}
                      </p>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <p
                        className={
                          coin.price_change_percentage_24h > 0
                            ? "text-green-500 whitespace-nowrap px-3 py-4 text-sm"
                            : "text-red-500 whitespace-nowrap px-3 py-4 text-sm"
                        }
                      >
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
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoinTable;
