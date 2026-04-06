import {
  TiWeatherCloudy,
  TiWeatherPartlySunny,
  TiWeatherShower,
} from "react-icons/ti";

export function NoWeatherData() {
  return (
    <div className="flex items-center justify-evenly min-h-full text-gray-200">
      <TiWeatherCloudy size={80} />
      <TiWeatherPartlySunny size={80} />
      <TiWeatherShower size={80} />
    </div>
  );
}