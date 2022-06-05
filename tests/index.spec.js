import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

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

describe("Home Page ", () => {
  it("Renders Table.", () => {
    render(
      <Home
        data={[
          { test: "test1" },
          { test: "test1" },
          { test: "test1" },
          { test: "test1" },
        ]}
        globalData={{
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
        }}
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
  });
});
