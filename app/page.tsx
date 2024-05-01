"use client";

import Background from "./components/background";
import WeatherIcon from "./components/weather-icon";
import { motion } from "framer-motion";
import WeatherCardList from "./components/weather-card-list";
import Text from "./components/text";
import useWeather from "./hooks/useWeather";
import { useMemo } from "react";
import TempSwitch from "./components/temp-switch";

export default function Home() {
  const {
    weather,
    weatherCardOptions,
    toggleTemperatureUnit,
    temperatureUnit,
  } = useWeather();

  const colorMode = useMemo(() => {
    if (weather.weather === "thunderstorm") return "light";
    return weather.isDayTime ? "dark" : "light";
  }, [weather.isDayTime, weather.weather]);

  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-4 md:p-24">
      <Background weather={weather.weather} isDayTime={weather.isDayTime} />

      <div className="flex flex-col gap-16 md:max-[500px]">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Text
            colorMode={colorMode}
            className="text-5xl font-bold text-center"
          >
            {weather.location}
          </Text>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4 justify-center items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <WeatherIcon
                weather={weather.weather}
                isDayTime={weather.isDayTime}
              />
            </motion.div>
            <div className="flex items-end gap-2">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Text className="font-bold text-7xl w-36" colorMode={colorMode}>
                  {temperatureUnit === 'celsius' ? weather.temperatureCelsius : weather.temperatureFahrenheit}º
                </Text>
              </motion.div>
              <div className="flex flex-col items-start gap-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <TempSwitch
                    temperatureUnit={temperatureUnit}
                    toggleTemperatureUnit={toggleTemperatureUnit}
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Text
                    colorMode={colorMode}
                    className="font-bold mb-1 capitalize"
                  >
                    {weather.weather}
                  </Text>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="block">
            <WeatherCardList list={weatherCardOptions} colorMode={colorMode} />
          </div>
        </div>
      </div>

      <div className="fixed bottom-2 right-2 p-1 px-4 rounded-2xl bg-white/10">
        <Text colorMode={colorMode} className="text-center text-sm">
          Develop by Aekkawan Klapsan
        </Text>
      </div>
    </main>
  );
}
