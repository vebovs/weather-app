import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  ZoomControl,
  Marker,
} from 'react-leaflet';
import React from 'react';

import { usePosition } from './Position';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [13.5, 41],
});

function LocationMarker() {
  const { position, setPosition } = usePosition()!;
  const map = useMapEvents({
    click: (event) => {
      setPosition([event.latlng.lat, event.latlng.lng]);
    },
  });

  if (position) return <Marker position={position} />;

  return null;
}

function Map() {
  const { position } = usePosition()!;
  const zoom: number = 14;

  return (
    <MapContainer
      style={{ height: '100vh' }}
      center={position}
      zoom={zoom}
      zoomControl={false}
      doubleClickZoom={false}
    >
      <TileLayer
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <ZoomControl position='bottomright' />
      <LocationMarker />
    </MapContainer>
  );
}

export default Map;
