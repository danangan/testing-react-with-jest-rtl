import Button from "./Button";
import { screen, render, fireEvent } from "@testing-library/react";

describe("Button", () => {
  it("should render button with provided label", () => {
    render(<Button label="any label" />);

    const button = screen.getByText("any label");

    expect(button).toBeInTheDocument;
  });

  it("should render button with default label if label props is not provided", () => {
    render(<Button />);

    const button = screen.getByText("default label");

    expect(button).toBeInTheDocument;
  });

  it("should invoke the onClick props when button is clicked", () => {
    const onClickMock = jest.fn();
    render(<Button label="any label" onClick={onClickMock} />);

    const button = screen.getByText("any label");

    fireEvent(button, new MouseEvent("click", { bubbles: true }));

    expect(onClickMock).toBeCalledTimes(1);
  });
});
