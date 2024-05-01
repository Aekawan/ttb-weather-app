import Image from "next/image";
import { useMemo } from "react";

interface WeatherIconProps {
  weather: "clear" | "cloudy" | "rainy" | "snowy" | "thunderstorm" | "windy" | "";
  isDayTime?: boolean;
}

interface WeatherIcons {
  [key: string]: {
    [key: string]: string;
  };
}

const weatherIcons: WeatherIcons = {
  day: {
    clear: "/icons/weather/day/clear.png",
    cloudy: "/icons/weather/day/cloudy.png",
    rainy: "/icons/weather/day/rainy.png",
    snowy: "/icons/weather/day/snowy.png",
    thunderstorm: "/icons/weather/day/thunderstorm.png",
    windy: "/icons/weather/day/windy.png",
  },
  night: {
    clear: "/icons/weather/night/clear.png",
    cloudy: "/icons/weather/night/cloudy.png",
    rainy: "/icons/weather/night/rainy.png",
    snowy: "/icons/weather/night/snowy.png",
    thunderstorm: "/icons/weather/night/thunderstorm.png",
    windy: "/icons/weather/night/windy.png",
  },
};

export default function WeatherIcon({
  weather,
  isDayTime = true,
}: WeatherIconProps) {
  const icon = useMemo(() => {
    return weatherIcons[isDayTime ? "day" : "night"][weather] ?? "";
  }, [weather, isDayTime]);

  return (
    <Image src={icon} alt={`${weather} weather icon`} width={300} height={300} />
  );
}
