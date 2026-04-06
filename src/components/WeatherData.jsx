import { WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { IconWeather } from "./IconWeather";

export function WeatherData({ data }) {
  const iconCode = data.cod !== "404" ? `${data.weather[0].icon}` : "null";

  return (
    <div className="min-h-full flex flex-col justify-center">
      {data.cod !== "404" ? (
        <>
          <div className="flex justify-around text-gray-200 flex-wrap">
            <div className="p-4 text-center">
              <h1 className="text-3xl mb-4">El clima en <br/> {data.name}</h1>
              <IconWeather icon={iconCode}/>
              <p className="text-xl font-light capitalize mt-2">
                {data.weather[0].description}
              </p>
            </div>
            <div className="p-4 text-center flex flex-col justify-center">
              <p className="text-[4.5rem] relative leading-none">
                {Math.round(data.main.temp)}
                <span className="text-2xl absolute top-4">&deg;C</span>
              </p>
              <p className="text-lg font-light">
                <span className="text-primary">{Math.round(data.main.temp_max)}&deg;C</span>
                {" / "}
                <span className="text-secondary">{Math.round(data.main.temp_min)}&deg;C</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-16 flex-wrap gap-4 text-gray-200">
            <p className="flex items-center gap-2 font-light text-xl">
              <WiHumidity size={40} /> {data.main.humidity} %
            </p>
            <p className="flex items-center gap-2 font-light text-xl">
              <WiSunrise size={40} />
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString("es-ES", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
            <p className="flex items-center gap-2 font-light text-xl">
              <WiSunset size={40} />
              {new Date(data.sys.sunset * 1000).toLocaleTimeString("es-ES", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </p>
          </div>
        </>
      ) : (
        <div className="flex justify-center font-light text-gray-200 text-sm">
          <h2>No hay resultados para su búsqueda</h2>
        </div>
      )}
    </div>
  );
}