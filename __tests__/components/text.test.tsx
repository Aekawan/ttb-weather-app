import { render } from "@testing-library/react";
import Text from "../../app/components/text";

describe("Text component", () => {
  test("renders with default props", () => {
    const { getByText } = render(<Text>Hello World!</Text>);
    const textElement = getByText("Hello World!");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("text-white");
  });

  test("renders with light color mode", () => {
    const { getByText } = render(<Text colorMode="light">Hello World!</Text>);
    const textElement = getByText("Hello World!");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("text-white");
  });

  test("renders with dark color mode", () => {
    const { getByText } = render(<Text colorMode="dark">Hello World!</Text>);
    const textElement = getByText("Hello World!");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("text-black");
  });

  test("renders with additional class name", () => {
    const { getByText } = render(<Text className="custom">Hello World!</Text>);
    const textElement = getByText("Hello World!");
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveClass("custom");
  });
});