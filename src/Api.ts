import axios from 'axios';
import type { LatLngExpression } from 'leaflet';

const api = axios.create();

export const getWeather = (position: LatLngExpression) => {
  const posString = position.toString();
  const comPos = posString.indexOf(',');
  const lat = parseFloat(posString.substring(0, comPos));
  const lon = parseFloat(posString.substring(comPos + 1, posString.length));

  return api
    .get(
      `https://api.met.no/weatherapi/nowcast/2.0/complete?lat=${lat}&lon=${lon}`,
    )
    .then((res) => {
      return res.data;
    });
};
