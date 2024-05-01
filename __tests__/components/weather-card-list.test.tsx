import { render } from "@testing-library/react";
import WeatherCardList from "../../app/components/weather-card-list";

const mockList = [
  { title: "Temperature", value: "25°C" },
  { title: "Humidity", value: "60%" },
];

describe("WeatherCardList component", () => {
  test("renders with empty list", () => {
    const { queryByText } = render(<WeatherCardList />);
    expect(queryByText("Temperature")).not.toBeInTheDocument();
    expect(queryByText("25°C")).not.toBeInTheDocument();
    expect(queryByText("Humidity")).not.toBeInTheDocument();
    expect(queryByText("60%")).not.toBeInTheDocument();
  });
  
  test("renders with custom list", () => {
    const { getByText } = render(<WeatherCardList list={mockList} />);
    expect(getByText("Temperature")).toBeInTheDocument();
    expect(getByText("25°C")).toBeInTheDocument();
    expect(getByText("Humidity")).toBeInTheDocument();
    expect(getByText("60%")).toBeInTheDocument();
  });

  test("renders with light color mode", () => {
    const { getByText } = render(
      <WeatherCardList list={mockList} colorMode="light" />
    );
    expect(getByText("Temperature")).toBeInTheDocument();
    expect(getByText("25°C")).toBeInTheDocument();
    expect(getByText("Humidity")).toBeInTheDocument();
    expect(getByText("60%")).toBeInTheDocument();
  });

  test("renders with dark color mode", () => {
    const { getByText } = render(
      <WeatherCardList list={mockList} colorMode="dark" />
    );
    expect(getByText("Temperature")).toBeInTheDocument();
    expect(getByText("25°C")).toBeInTheDocument();
    expect(getByText("Humidity")).toBeInTheDocument();
    expect(getByText("60%")).toBeInTheDocument();
  });
});