
import { createContext, useState, useContext } from 'react';

const SpotContext = createContext();

export const SpotProvider = ({ children }) => {
  const [spot, setSpot] = useState(null);

  return (
    <SpotContext.Provider value={{ spot, setSpot }}>
      {children}
    </SpotContext.Provider>
  );
};

export const useSpot = () => useContext(SpotContext);
