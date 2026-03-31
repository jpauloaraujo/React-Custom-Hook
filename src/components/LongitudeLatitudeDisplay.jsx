import { useGeolocation } from "../hooks/useGeolocation"; // Importa o hook [cite: 353]

export const LongitudeLatitudeDisplay = () => {
  const currentLocation = useGeolocation(); // Usa o hook [cite: 354]

  if (!currentLocation || !currentLocation.latitude) {
    return <p>{"Sorry, location is currently unavailable"}</p>;
  }

  const { latitude, longitude } = currentLocation;

  return (
    <section>
      <p>
        {latitude}° {latitude > 0 ? "N" : "S"}
      </p>
      <hr />
      <p>
        {longitude}° {longitude > 0 ? "E" : "W"}
      </p>
    </section>
  );
};
