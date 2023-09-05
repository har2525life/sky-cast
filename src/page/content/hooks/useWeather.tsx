import { useEffect, useState } from "react";
import axios from "axios";
import { kelvinToCelsius } from "../../../lib/weather";

const APIKEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

function useWeather(): [
  WeatherData | null,
  WeatherError | null,
  PositionData | null
] {
  const [data, setData] = useState<WeatherData | null>(null);
  const [position, setPosition] = useState<PositionData | null>(null);
  const [error, setError] = useState<WeatherError | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`;

        try {
          const response = await axios.get(url);
          const data = response.data;
          console.log(data);
          setData({
            currentWeather: data.weather[0].description,
            currentTemp: kelvinToCelsius(data.main.temp),
            maxTemp: kelvinToCelsius(data.main.temp_max),
            minTemp: kelvinToCelsius(data.main.temp_min),
          });
          setPosition({ currentPosition: data.name });
        } catch (e) {
          setError({ message: "Error fetching weather data." });
        }
      });
    }
  }, []);

  return [data, error, position];
}

export default useWeather;
