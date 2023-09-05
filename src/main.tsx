import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MapPage from "./page/map/MapPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentPage from "./page/content/ContentPage";
import WeatherPage from "./page/weather/WeatherPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
