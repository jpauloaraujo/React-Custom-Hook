import { useGeolocation } from "../hooks/useGeolocation"; 

export const HemisphereDisplay = () => {
  const currentLocation = useGeolocation(); 

  if (!currentLocation || !currentLocation.latitude) {
    return <p>{"Sorry, location is currently unavailable"}</p>;
  }

  if (currentLocation.latitude === 0) {
    return <p>You are at the equator!</p>;
  }

  const hemisphere = currentLocation.latitude > 0 ? "northern" : "southern";

  return <p>You are in the {hemisphere} hemisphere.</p>;
};
