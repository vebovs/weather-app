import React from 'react';
import { usePosition } from './Position';

function Dashboard() {
  const { position } = usePosition()!;
  console.log(position);
  return null;
}

export default Dashboard;
