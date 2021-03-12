import React from 'react';
import { usePosition } from './Position';

function Dashboard() {
  const { position } = usePosition()!;

  if (position) return <h1>Dashboard!</h1>;

  return null;
}

export default Dashboard;
