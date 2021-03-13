import React from 'react';
import { PositionProvider } from './components/Position';
import Dashboard from './components/Dashboard';
import Map from './components/Map';

function App() {
  return (
    <PositionProvider>
      <Dashboard />
      <Map />
    </PositionProvider>
  );
}

export default App;
