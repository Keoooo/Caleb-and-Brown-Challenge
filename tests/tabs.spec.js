import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Tabs from "../components/Tabs/Tabs";
import Home from "../pages/index";

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

describe("Test Tabs Buttons.", () => {
  const btnClick = jest.fn((value) => {});

  it("Test should render tables mathcing the tab name ", () => {
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

    const TRENDING_BUTTON = screen.getByRole("button", { name: /Trending/i });
    fireEvent.click(TRENDING_BUTTON);

    expect(screen.getAllByTestId("trending-table-element"));

    const ALL_COINS_BUTTON = screen.getByRole("button", { name: /All Coins/i });
    fireEvent.click(ALL_COINS_BUTTON);

    expect(screen.getAllByTestId("trending-table-element"));
  });
});
