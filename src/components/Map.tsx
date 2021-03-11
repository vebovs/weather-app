import L from 'leaflet';
import type { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import React from 'react';

function Map() {
  // Default coordinates set to Oslo central station
  const position: LatLngExpression = [59.91174337077401, 10.750425582038146];
  const zoom: number = 15;

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
