import CoinTable from "../components/Tables/CoinTable";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/router";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        data: {
          defi_dominance:
            "3.6150656006447010674830706798972357138509919627652441",
          defi_market_cap: "46330488255.147621770414812808",
          defi_to_eth_ratio:
            "21.3871306355976298159578126138944644504510199530564082311262019",
          eth_market_cap: "216627882648.4242352131203913856",
          top_coin_defi_dominance: 15.926822969581512,
          top_coin_name: "Lido Staked Ether",
          trading_volume_24h: "2570668638.758253522966072578624",
        },
      }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe(" All Coin Table ", () => {
  it("Renders Table With data passed as prop.", () => {
    const mockRouter = {
      push: jest.fn(), // the component uses `router.push` only
    };
    render(
      <CoinTable
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

    // check if all table  is rendered
    expect(screen.getAllByText("Coin Name"));
    expect(screen.getAllByText("Price"));
    expect(screen.getAllByText("Low 24h"));
    expect(screen.getAllByText("High 24h"));
    expect(screen.getAllByText("Price Change 24h"));
    expect(screen.getAllByText("Market cap"));
    expect(screen.getAllByText("MC change 24h"));
    expect(screen.getAllByText("All Time High"));
    expect(screen.getAllByText("ATH Change %"));
    expect(screen.getAllByText("bitcoin"));
    expect(screen.getAllByText("#1"));
    expect(screen.getAllByText("$598,377,087,541.00"));
  });
});
