import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";

interface BackgroundProps {
  weather?:
  | "clear"
  | "cloudy"
  | "rainy"
  | "snowy"
  | "thunderstorm"
  | "windy"
  | "";
  isDayTime?: boolean;
}

interface BodyStyleProps {
  backgroundColor: string;
}

const BodyStyle = createGlobalStyle<BodyStyleProps>`
  body {
    background: ${({ backgroundColor }) => backgroundColor};
  }
`;

const weatherBackgrounds: Record<string, Record<string, string>> = {
  day: {
    clear: "linear-gradient(to bottom, #56ccf2, #2f80ed)",
    cloudy: "linear-gradient(to bottom, #dfe6e9, #bdc3c7)",
    rainy: "linear-gradient(to bottom, #4b6cb7, #182848)",
    snowy: "linear-gradient(to bottom, #bdc3c7, #2c3e50)",
    thunderstorm: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
    windy: "linear-gradient(to bottom, #d1ccc0, #a3a3a3)",
    foggy: "linear-gradient(to bottom, #636e72, #bdc3c7)",
  },
  night: {
    clear: "linear-gradient(to bottom, #0c0c0c, #0d0d0d, #0e0e0e, #0f0f0f)",
    cloudy: "linear-gradient(to bottom, #34495e, #2c3e50)",
    rainy: "linear-gradient(to bottom, #2c3e50, #1e272e)",
    snowy: "linear-gradient(to bottom, #dfe6e9, #bdc3c7)",
    thunderstorm: "linear-gradient(to bottom, #0f0c29, #302b63, #24243e)",
    windy: "linear-gradient(to bottom, #d1ccc0, #a3a3a3)",
  },
};

const Background = ({ weather = "", isDayTime = false }: BackgroundProps) => {
  const [background, setBackground] = useState<string>("");

  useEffect(() => {
    setBackground(weatherBackgrounds[isDayTime ? "day" : "night"][weather]);
  }, [weather, isDayTime]);

  return <BodyStyle backgroundColor={background} />;
};

export default Background;
