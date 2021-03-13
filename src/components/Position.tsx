import type { LatLngExpression } from 'leaflet';
import React, { createContext, useState, ReactNode, useContext } from 'react';

// Default coordinates set to Trondheim, Norway
const defaultPosition: LatLngExpression = [63.418265, 10.402862];
type PositionContextType = {
  position: LatLngExpression;
  setPosition: (value: [number, number]) => void;
};
const PositionContext = createContext<PositionContextType | undefined>(
  undefined,
);

type Props = { children: ReactNode };

export const PositionProvider = ({ children }: Props) => {
  const [position, setPosition] = useState(defaultPosition);

  return (
    <PositionContext.Provider value={{ position, setPosition }}>
      {children}
    </PositionContext.Provider>
  );
};

export const usePosition = () => useContext(PositionContext);
