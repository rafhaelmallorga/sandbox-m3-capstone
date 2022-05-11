import { NavBar } from "./styled";

const Header = () => {
  return (
    <NavBar>
      <div>
        <div className="logoSection">
          <img
            src={require("../../assets/logo-hamburguer.png")}
            alt="Hamburguer"
          />
          <h1>
            DES<span>toq</span>
          </h1>
        </div>

        <h3 className="provaDeConceito">PROVA DE CONCEITO</h3>

        <nav>
          <button className="logoutButton">Logout</button>
        </nav>
      </div>
    </NavBar>
  );
};

export default Header;
