import SearchBar from "../components/UI/SearchBar";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Input value", () => {
  it("updates on change", () => {
    const setSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(
      <SearchBar
        setSearch={setSearch}
        coinData={[{ id: "test", image: "test/Img" }]}
      />
    );

    const searchInput = queryByPlaceholderText("Search");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
