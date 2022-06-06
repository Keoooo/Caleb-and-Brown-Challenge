import Nav from "../components/Layout/Nav";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Site Navigation", () => {
  it("Check Logo renders", () => {
    render(
      <Nav
        coinData={[
          {
            ath: 69045,
            ath_change_percentage: -54.45696,
            ath_date: "2021-11-10T14:24:11.849Z",
            atl: 67.81,
            atl_change_percentage: 46273.02571,
            atl_date: "2013-07-06T00:00:00.000Z",
            circulating_supply: 19059668,
            current_price: 31395,
            fully_diluted_valuation: 659293689604,
            high_24h: 31518,
            id: "bitcoin",
            image:
              "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
            last_updated: "2022-06-06T11:38:18.058Z",
            low_24h: 29655,
            market_cap: 598377087541,
            market_cap_change_24h: 32061415949,
            market_cap_change_percentage_24h: 5.6614,
            market_cap_rank: 1,
            max_supply: 21000000,
            name: "Bitcoin",
            price_change_24h: 1680.76,
            price_change_percentage_24h: 5.65641,
            roi: null,
            symbol: "btc",
            total_supply: 21000000,
            total_volume: 22240147781,
          },
        ]}
      />
    );

    expect(screen.getAllByAltText("logo-cb"));
  });
});
