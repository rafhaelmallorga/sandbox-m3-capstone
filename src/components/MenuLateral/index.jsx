import { MenuContainer } from "./styled";
import { Link } from "react-router-dom";
import { MdOutlineDashboard } from "react-icons/md";
import { FcFactory } from "react-icons/fc";
import { FcEngineering } from "react-icons/fc";
import { FaHamburger } from "react-icons/fa";

const MenuLateral = () => {
  return (
    <MenuContainer>
      <Link to="/">
        <MdOutlineDashboard />
        Dashboard
      </Link>
      <Link to="/fornecedores">
        <FcFactory /> Fornecedores
      </Link>
      <Link to="/insumos">
        <FcEngineering /> Insumos
      </Link>
      <Link to="/produtos">
        <FaHamburger /> Produtos
      </Link>
    </MenuContainer>
  );
};

export default MenuLateral;
