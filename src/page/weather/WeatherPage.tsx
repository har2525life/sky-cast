import React from "react";
import MapPage from "../map/MapPage";
import { useLocation } from "react-router-dom";

interface State {
  currentPosition: [number, number];
}

function WeatherPage() {
  const location = useLocation();
  console.log(location.state);
  const { currentPosition } = location.state as State;
  return <MapPage currentPosition={currentPosition} />;
}

export default WeatherPage;
