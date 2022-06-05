import React from "react";
import Nav from "../../components/Layout/Nav";
import MarketDataChart from "../../components/Charts/MarketDataChart";
import CoinDetailed from "../../components/UI/CoinDetailed";

//---------[x]For the Visible Cryptocurrencies, provide further information in any form you find appropriate

const CoinCharting = ({ coinData, chartDataJson }) => {
  const { market_caps, prices, total_volumes } = coinData;
  const { developer_data, community_data } = chartDataJson;

  return (
    <>
      <Nav />
      <div className=" flex bg-companyBranding  flex-col md:flex-row ">
        <MarketDataChart
          marketCap={market_caps}
          prices={prices}
          total_volumes={total_volumes}
        />
        <div className="flex flex-col max-h-screen">
          <CoinDetailed coinMarketInfo={chartDataJson} />
        </div>
      </div>
    </>
  );
};

export default CoinCharting;

//NextJs needs adding even though its not used.
export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export async function getStaticProps({ params }) {
  const { id } = params;

  try {
    const [chartData, marketData] = await Promise.all([
      fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30&interval=daily`
      ),
      fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=true
      `),
    ]);

    const [chartDataJson, marketDataJson] = await Promise.all([
      chartData.json(),
      marketData.json(),
    ]);

    if (!chartDataJson || !marketDataJson) {
      return { notFound: true };
    }
    return {
      props: { coinData: chartDataJson, chartDataJson: marketDataJson },
    };
  } catch (error) {
    return { notFound: true };
  }
}
