import { ref, onValue, get, DatabaseReference } from "firebase/database";
import { database } from "../../firebaseConfig";
import { useCallback, useEffect, useState } from "react";
import dayjs from "dayjs";

interface IWeather {
  temperatureCelsius?: number;
  temperatureFahrenheit?: number;
  weather: "clear" | "cloudy" | "rainy" | "snowy" | "thunderstorm" | "windy" | "";
  rainProbability: number;
  humidity: number;
  wind: number;
  location: string;
  updatedAt: string;
  isDayTime?: boolean;
}

interface IWeatherCardOptions {
  title: string;
  value: string;
}

type ITemperatureUnit = "celsius" | "fahrenheit";

export default function useWeather() {
  const [weather, setWeather] = useState<IWeather>({
    temperatureCelsius: 0,
    temperatureFahrenheit: 0,
    weather: "",
    rainProbability: 0,
    humidity: 0,
    wind: 0,
    location: "",
    updatedAt: "",
    isDayTime: true,
  });

  const [temperatureUnit, toggleTemperatureUnit] = useState<ITemperatureUnit>("celsius");

  const [weatherCardOptions, setWeatherCardOptions] = useState<IWeatherCardOptions[]>([]);


  useEffect(() => {
    const query: DatabaseReference = ref(database);

    return onValue(query, snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setWeather({
          temperatureCelsius: data.temperature_celsius ?? 0,
          temperatureFahrenheit: data.temperature_fahrenheit ?? 0,
          weather: data.weather ?? "",
          rainProbability: data.rain_probability ?? 0,
          humidity: data.humidity ?? 0,
          wind: data.wind ?? 0,
          location: data.location ?? "",
          updatedAt: data.updated_at  ?? "",
          isDayTime: getDayOrNight(data.updated_at),
        });
      }
    });
  }, []);

  useEffect(() => {
    const weatherCardOptions: IWeatherCardOptions[] = getWeatherCardOptions(weather);
    setWeatherCardOptions(weatherCardOptions);
  }, [weather]);

  const getDayOrNight = (date: string) => {
    const currentTime = dayjs(date);
    const isDayTime = currentTime.isBefore(currentTime.set('hour', 18));
    return isDayTime;
  }

  const getWeatherCardOptions = (data: IWeather) => {
    const options: IWeatherCardOptions[] = [
      { title: "Rain Probability", value: `${data.rainProbability}%` },
      { title: "Humidity", value: `${data.humidity}%` },
      { title: "Wind", value: `${data.wind} km/h` },
    ]

    return options
  }

  return {
    weather,
    weatherCardOptions,
    temperatureUnit,
    toggleTemperatureUnit,
  }
}