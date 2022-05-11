import { MenuContainer } from "./styled";
import { Link } from "react-router-dom";

const MenuLateral = () => {
  return (
    <MenuContainer>
      <Link to="/">Dashboard</Link>
      <Link to="/fornecedores">Fornecedores</Link>
      <Link to="/insumos">Insumos</Link>
      <Link to="/produtos">Produtos</Link>
    </MenuContainer>
  );
};

export default MenuLateral;
