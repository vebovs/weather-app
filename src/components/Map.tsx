import L from 'leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import React from 'react';

function Map() {
  // Default coordinates set to Trondheim, Norway
  const position: LatLngExpression = [63.418265, 10.402862];
  const zoom: number = 14;

  return (
    <MapContainer center={position} zoom={zoom} zoomControl={false}>
      <TileLayer
        attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <ZoomControl position='bottomright' />
    </MapContainer>
  );
}

export default Map;
