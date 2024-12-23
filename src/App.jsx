import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error(error.message);
      setWeather(null); // Clear data if fetch fails
    }
  };

  return (
    <div className="main-container">
      <div className="weather-container">
      <h1 >Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} />
      </div>
    </div>
  );
};

export default App;
