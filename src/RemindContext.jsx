import React, { createContext, useState, useContext } from 'react';


const RemindContext = createContext();


export const RemindProvider = ({ children }) => {
  const [remind, setRemind] = useState(0); 

  return (
    <RemindContext.Provider value={{ remind, setRemind }}>
      {children}
    </RemindContext.Provider>
  );
};


export const useRemind = () => useContext(RemindContext);