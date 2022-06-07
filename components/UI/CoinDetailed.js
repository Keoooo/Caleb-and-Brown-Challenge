import React from "react";
import { formatDollar, formatPercent } from "../../utils/helpers";
import { FiTwitter } from "react-icons/fi";
import { FcReddit } from "react-icons/fc";

const CoinDetailed = ({ coinMarketInfo }) => {
  const {
    id,
    image,
    symbol,
    developer_data,
    coingecko_rank,
    community_data,
    hashing_algorithm,
    description,
    links,
    market_data: {
      current_price,
      ath,
      market_cap,
      high_24h,
      low_24h,
      max_supply,
    },
  } = coinMarketInfo;

  return (
    <div className="bg-white mt-10  min-h-full w-full shrink overflow-scroll sm:rounded-lg">
      <div className="  px-4 py-5 sm:px-6">
        <div className="flex">
          <img
            className="h-7 w-7 mr-2  rounded-full"
            src={image.small}
            alt=""
          />
          <h3 className="text-lg leading-6 uppercase font-medium text-gray-900">
            {id}
          </h3>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              Coin Gecko Rank
            </dt>
            <dd className="mt-1 text-sm uppercase text-gray-900 sm:mt-0 sm:col-span-2">
              {coingecko_rank}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Algorithm</dt>
            <dd className="mt-1 uppercase text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {hashing_algorithm}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Symbol</dt>
            <dd className="mt-1 uppercase text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {symbol}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm max-h-40 overflow-scroll text-gray-900 sm:mt-0 sm:col-span-2">
              {description.en}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Price</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {formatDollar(current_price.usd)}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">High 24H</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {formatDollar(high_24h.usd)}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Low 24H</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {formatDollar(low_24h.usd)}
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Market cap</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {formatDollar(market_cap.usd)}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Max Supply</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {max_supply}
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">All Time High</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              {formatDollar(ath.usd)}
            </dd>
          </div>

          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Socials</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ol>
                <li className="flex t item-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex	"
                    href={`https://twitter.com/${links.twitter_screen_name}`}
                  >
                    <FiTwitter className="h-3 w-3 mr-2" />
                    {`Twitter Followers: ${community_data.twitter_followers}`}
                  </a>
                </li>
                <li className=" cursor-pointer  items-center">
                  <a
                    target="_blank"
                    className="flex	"
                    rel="noopener noreferrer"
                    href={links.subreddit_url}
                  >
                    <FcReddit className="mr-2" />
                    {`Reddit Subscribers: ${community_data.reddit_subscribers}`}
                  </a>
                </li>
              </ol>
            </dd>
          </div>
          <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Development</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <ol>
                <li>{`Stars: ${developer_data.stars}`}</li>
                <li>{`Closed Issues: ${developer_data.closed_issues}`}</li>
                <li>{`Issues: ${developer_data.total_issues}`}</li>
                <li>{`Contributors: ${developer_data.pull_request_contributors}`}</li>
                <li>{`Pull Request Merged: ${developer_data.pull_requests_merged}`}</li>
              </ol>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default CoinDetailed;
