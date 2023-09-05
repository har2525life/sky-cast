import React from "react";
import useWeather from "./hooks/useWeather";
import { useNavigate } from "react-router-dom";

function ContentPage() {
  const navigate = useNavigate();
  const [data, error, position] = useWeather();
  

  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const trancePage = (name: string) => {
    switch (name) {
      case "weather":
        navigate("/weather", {state: { currentPosition: position?.currentPositionData}});
        break;
      default:
        throw new Error();
    }
  };
  return (
    <div className="p-10 space-y-4">
      <div className="w-full shadow-md rounded-md p-6 hover:bg-gray-300 hover:cursor-pointer">
        天体観測
      </div>
      <div className="flex space-x-4">
        <div
          onClick={() => trancePage("weather")}
          className="w-full shadow-md rounded-md p-6 hover:bg-gray-300 hover:cursor-pointer"
        >
          <h1>天気</h1>
          <ul>
            <li>現在の天気: {position?.currentPosition}</li>
            <li>現在の天気: {data.currentWeather}</li>
            <li>現在の気温: {data.currentTemp}℃</li>
            <li>最高気温: {data.maxTemp}℃</li>
            <li>最低気温: {data.minTemp}℃</li>
          </ul>
        </div>
        <div className="w-full shadow-md rounded-md p-6 hover:bg-gray-300 hover:cursor-pointer">
          空気質
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
