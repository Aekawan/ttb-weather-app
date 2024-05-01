import classnames from "classnames";

type ITemperatureUnit = "celsius" | "fahrenheit";

export default function TempSwitch({
  temperatureUnit,
  toggleTemperatureUnit,
}: {
  temperatureUnit: "celsius" | "fahrenheit";
  toggleTemperatureUnit: (unit: ITemperatureUnit) => void;
}) {
  return (
    <div className="flex items-center justify-center bg-white/10 p-1 py-1 gap-1 rounded-md">
      <button
        className={classnames("text-white bg-gray-800 p-2 py-1 rounded-md", {
          "bg-gray-600": temperatureUnit === "celsius",
        })}
        onClick={() => toggleTemperatureUnit("celsius")}
      >
        °C
      </button>
      <button
        className={classnames("text-white bg-gray-800 p-2 py-1 rounded-md", {
          "bg-gray-600": temperatureUnit === "fahrenheit",
        })}
        onClick={() => toggleTemperatureUnit("fahrenheit")}
      >
        °F
      </button>
    </div>
  );
}