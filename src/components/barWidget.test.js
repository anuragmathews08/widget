import { screen, render, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BarWidget } from "./barWidget";

describe("<BarWidget /> component test", () => {
  afterEach(() => {
    cleanup();
  });

  it("should display value and bars", () => {
    render(<BarWidget />);
    const rangeValue = screen.getByLabelText("range-value");
    const bars = screen.getByLabelText("range-bars");
    expect(rangeValue).toBeInTheDocument();
    expect(bars).toBeInTheDocument();
  });

  it("should display default value as medium", () => {
    render(<BarWidget />);
    const rangeValue = screen.getByLabelText("range-value");
    expect(rangeValue.innerHTML).toBe("Medium");
  });

  it("should display range value as High for top bar click", async () => {
    render(<BarWidget />);
    const rangeValue = screen.getByLabelText("range-value");
    const topBar = screen.getByTestId("top-bar");
    await userEvent.click(topBar);
    await waitFor(() => {
      expect(rangeValue.innerHTML).toBe("High");
    });
  });

  it("should display range value as Low for bottom most bar click", async () => {
    render(<BarWidget />);
    const rangeValue = screen.getByLabelText("range-value");
    const bottomBar = screen.getByTestId("bottom-bar");
    await userEvent.click(bottomBar);
    await waitFor(() => {
      expect(rangeValue.innerHTML).toBe("Low");
    });
  });
});
