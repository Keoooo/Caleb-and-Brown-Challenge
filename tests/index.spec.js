import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Home Page ", () => {
  it("renders text on screen", () => {
    render(<Home />);
    // check if all components are rendered
    expect(
      screen.getAllByText("Caleb and Brown Challenge")
    ).toBeInTheDocument();
  });
});
