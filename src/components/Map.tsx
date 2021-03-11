import L from 'leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  ZoomControl,
  Marker,
} from 'react-leaflet';
import React, { useState } from 'react';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [13.5, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

function LocationMarker() {
  const [position, setPosition] = useState<LatLngExpression>();
  const map = useMapEvents({
    click: (event) => {
      console.log(event);
      setPosition(event.latlng);
    },
  });

  if (position) return <Marker position={position} />;

  return null;
}

function Map() {
  // Default coordinates set to Trondheim, Norway
  const position: LatLngExpression = [63.418265, 10.402862];
  const zoom: number = 14;

  return (
    <MapContainer
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