import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { CircleWidget } from "./circleWidget";

describe("<CircleWidget /> component Test", () => {
  afterEach(() => {
    cleanup();
  });

  it("should display range number on screen", () => {
    render(<CircleWidget />);
    const rangeNumberElement = screen.getByLabelText("value-circle");
    expect(rangeNumberElement).toBeInTheDocument();
  });

  it("should display 5 as default range", () => {
    render(<CircleWidget />);
    const rangeNumberElement = screen.getByLabelText("value-circle");
    expect(rangeNumberElement.innerHTML).toBe("5");
  });

  it("should change value on slider change", () => {
    render(<CircleWidget />);
    fireEvent.change(screen.getByLabelText("slider"), { target: { value: 6 } });
    expect(screen.getByLabelText("value-circle").innerHTML).toBe("6");
  });
});
