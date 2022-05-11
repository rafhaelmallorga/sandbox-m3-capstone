import { createContext, useContext, useState } from "react";

export const IngredientesContext = createContext();

export const IngredientesProvider = ({ children }) => {
  const [ingredientes, setIngredientes] = useState([]);

  return (
    <IngredientesContext.Provider value={{ ingredientes, setIngredientes }}>
      {children}
    </IngredientesContext.Provider>
  );
};

export const useIngredients = () => useContext(IngredientesContext);
