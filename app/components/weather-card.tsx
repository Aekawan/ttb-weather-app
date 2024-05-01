import Text from "./text";

interface WeatherCardProps {
  title?: string;
  value?: string;
  colorMode?: "light" | "dark";
}

export default function WeatherCard({
  title = "โอกาสฝนตก",
  value = "60%",
  colorMode = "dark",
}: WeatherCardProps) {
  return (
    <div
      className="relative flex flex-col p-3 bg-white/10 shadow-sm rounded-xl h-32 w-full md:w-48 transform brightness-90 transition will-change-auto group-hover:brightness-110 select-none pointer-events-none"
    >
      <span className="absolute rounded-lg bottom-0 left-0 right-0 h-full bg-gradient-to-b from-black/5 to-black/10"></span>
      <Text
        className="text-sm z-10"
        colorMode={colorMode}
      >
        {title}
      </Text>
      <div className="flex w-full h-full justify-center items-center">
        <Text
          colorMode={colorMode}
          className="text-4xl uppercase font-bold text-center z-10"
        >
          {value}
        </Text>
      </div>
    </div>
  )
}