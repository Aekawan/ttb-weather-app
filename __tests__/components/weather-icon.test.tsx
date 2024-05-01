import { render } from "@testing-library/react";
import WeatherIcon from "../../app/components/weather-icon";

describe("WeatherIcon component", () => {
  test("renders with clear weather", () => {
    const { getByAltText } = render(<WeatherIcon weather="clear" />);
    const iconElement = getByAltText("clear weather icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("renders with cloudy weather", () => {
    const { getByAltText } = render(<WeatherIcon weather="cloudy" />);
    const iconElement = getByAltText("cloudy weather icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("renders with rainy weather", () => {
    const { getByAltText } = render(<WeatherIcon weather="rainy" />);
    const iconElement = getByAltText("rainy weather icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("renders with snowy weather", () => {
    const { getByAltText } = render(<WeatherIcon weather="snowy" />);
    const iconElement = getByAltText("snowy weather icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("renders with thunderstorm weather", () => {
    const { getByAltText } = render(<WeatherIcon weather="thunderstorm" />);
    const iconElement = getByAltText("thunderstorm weather icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("renders with windy weather", () => {
    const { getByAltText } = render(<WeatherIcon weather="windy" />);
    const iconElement = getByAltText("windy weather icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("renders with night time", () => {
    const { getByAltText } = render(<WeatherIcon weather="clear" isDayTime={false} />);
    const iconElement = getByAltText("clear weather icon");
    expect(iconElement).toBeInTheDocument();
  });
});