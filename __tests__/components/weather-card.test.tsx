import { render } from "@testing-library/react";
import WeatherCard from "../../app/components/weather-card";

describe("WeatherBox component", () => {
  test("renders with default props", () => {
    const { getByText } = render(<WeatherCard />);
    const titleElement = getByText("โอกาสฝนตก");
    const valueElement = getByText("60%");
    expect(titleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

  test("renders with custom title and value", () => {
    const { getByText } = render(<WeatherCard title="ความชื้น" value="80%" />);
    const titleElement = getByText("ความชื้น");
    const valueElement = getByText("80%");
    expect(titleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});