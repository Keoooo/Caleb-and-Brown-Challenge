import Pagnation from "../components/Pagnation/Pagnation";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Home Page ", () => {
  it("Renderes Pagnation .", () => {
    render(<Pagnation />);
  });
});
