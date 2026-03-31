import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [currentLocation, setCurrentLocation] = useState({}); // Inicializa com objeto vazio [cite: 340]

  useEffect(() => {
    const onSuccess = (e) => {
      setCurrentLocation({
        latitude: e.coords.latitude.toFixed(3), // Formata a latitude [cite: 347]
        longitude: e.coords.longitude.toFixed(3), // Formata a longitude [cite: 347]
      });
    };

    navigator.geolocation.getCurrentPosition(onSuccess); // Busca a posição [cite: 348]
  }, []);

  return currentLocation; // Retorna o valor de currentLocation [cite: 349]
};
