import { IngredientesProvider } from "./Ingredientes";

const Providers = ({ children }) => {
  return <IngredientesProvider>{children}</IngredientesProvider>;
};

export default Providers;
