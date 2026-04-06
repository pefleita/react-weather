import { useState } from "react";
import { SearchWeather } from "./components/SearchWeather";
import { WeatherData } from "./components/WeatherData";
import { NoWeatherData } from "./components/NoWeatherData";
import weatherBg from "./assets/img/weather-bg-min.jpg";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export function App() {
  const [weather, setWeather] = useState(null);

  async function fetchWeather(city) {
    if (city === "") {
      alert("Escriba el nombre de una ciudad para conocer su clima");
      return;
    }
    
    const data = await fetch(
      `${API_URL}?q=${city}&units=metric&lang=es&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data);

    setWeather({ data: data });
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:min-h-full overflow-hidden">
      <div className="flex-1 px-6 py-8 md:p-8 bg-primary text-white md:flex-none md:w-1/2 flex flex-col">
        <SearchWeather onSearch={fetchWeather} />
      </div>
      <div 
        className="flex-1 px-6 py-8 md:p-8 min-h-[50vh] md:min-h-full flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${weatherBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {weather?.data !== undefined ? (
          <WeatherData data={weather.data} />
        ) : <NoWeatherData />}
      </div>
    </div>
  );
}