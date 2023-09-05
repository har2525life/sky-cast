import { Map, Marker } from "maplibre-gl";
import { useEffect, useRef, RefObject, useState } from "react";

interface UseMapReturnType {
  mapContainerRef: RefObject<HTMLDivElement>;
  setMarkerCoords: (currentPosition: [number, number]) => void
}


function useMapHooks(currentPosition: [number,number]): UseMapReturnType {
  console.log(currentPosition)
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | null>(null);
  const [marker, setMarker] = useState<Marker | null>(null);

  useEffect(() => {
    if (mapContainerRef.current && !map) {
      const initialMap = new Map({
        container: mapContainerRef.current,
        style: "https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json",
        center: [139.767, 35.6812],
        zoom: 14,
      });
      setMap(initialMap);
    }
    return () => {
      map?.remove();
    };
  }, [map]);

  useEffect(() => {
    if (map) {
      if (marker) marker.remove();
      const newMarker = new Marker().setLngLat(currentPosition).addTo(map);
      setMarker(newMarker);
      map.flyTo({center: currentPosition})
    }
  }, [map, currentPosition])

  const setMarkerCoords = (currentPosition: [number, number]) => {
    if (map) {
      if (marker) marker.remove();
      const newMarker = new Marker().setLngLat(currentPosition).addTo(map);
      setMarker(newMarker);
      map.flyTo({center: currentPosition})
    }
  };
  return { mapContainerRef, setMarkerCoords };
}

export default useMapHooks;
