import { render, screen } from "@testing-library/react";
import Home from "./page";

const sum = (x: number, y: number) => {
  return x + y;
};

describe("Sum function", () => {
  it("should sum two numbers", () => {
    expect(sum(4, 4)).toBe(8);
  });

  it("should render App with hello message", () => {
    render(<Home />);

    screen.getByText("Hello world!");
  });
});

export default {};
