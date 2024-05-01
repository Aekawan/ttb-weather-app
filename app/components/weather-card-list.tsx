import { motion } from "framer-motion";
import WeatherCard from "./weather-card";

const listMotionVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.15,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const itemMotionVariants = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};

interface IWeatherBoxItem {
  title: string;
  value: string;
}

interface IWeatherBoxListProps {
  list?: IWeatherBoxItem[];
  colorMode?: "light" | "dark";
}

export default function WeatherBoxList({
  list = [],
  colorMode = "dark",
}: IWeatherBoxListProps) {
  return (
    <motion.ul
      className="grid grid-cols-2 gap-6"
      variants={listMotionVariants}
      initial="hidden"
      animate="show"
    >
      {list?.map((item: IWeatherBoxItem, index: number) => (
        <motion.li
          variants={itemMotionVariants}
          key={index}
        >
          <WeatherCard
            colorMode={colorMode}
            title={item.title}
            value={item.value}
          />
        </motion.li>
      ))}
    </motion.ul>
  );
}
