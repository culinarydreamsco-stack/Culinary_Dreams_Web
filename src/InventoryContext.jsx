import React, { createContext, useState, useContext } from 'react';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  
  const [inventoryData, setInventory] = useState([
    { name: 'Flour (kg)', amount: 80 },
    { name: 'Sugar (kg)', amount: 10 }, 
    { name: 'Pkg Boxes', amount: 20 },  
    { name: 'Oil (L)', amount: 15 },    
  ]);

  
  const updateStock = (itemName, quantityToAdd) => {
    setInventory(prevInventory => 
      prevInventory.map(item => 
        
        item.name === itemName 
          ? { ...item, amount: item.amount + parseInt(quantityToAdd) }
          : item
      )
    );
  };

  return (
    <InventoryContext.Provider value={{ inventoryData, updateStock }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);