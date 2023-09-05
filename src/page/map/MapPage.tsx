import useMapHooks from "./hooks/useMapHooks";

interface MapPageProps {
  currentPosition: [number, number];
}

function MapPage(props: MapPageProps) {
  const { currentPosition } = props;
  const { mapContainerRef } = useMapHooks(currentPosition);
  return (
    <div ref={mapContainerRef} style={{ width: "100%", height: "100vh" }} />
  );
}

export default MapPage;
