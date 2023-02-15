import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should call the onClick prop when the button is clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );

    const buttonElement = getByText("Click me");
    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });
});

describe("Button component", () => {
  it("renders with a disabled prop", () => {
    const { getByText } = render(<Button disable>Disable Button</Button>);
    const button = getByText(/Disable Button/i);
    expect(button).toBeDisabled();
  });
});

describe("Button component with children prop", () => {
  it("renders the children prop correctly", () => {
    const text = "Click me";
    const { getByText } = render(<Button>{text}</Button>);

    expect(getByText(text)).toBeInTheDocument();
  });

  it("fires the onClick event correctly", () => {
    const text = "Click me";
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>{text}</Button>);

    fireEvent.click(getByText(text));

    expect(onClick).toHaveBeenCalled();
  });
});
