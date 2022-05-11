import { CardContainer } from "./styled";

const Card = ({
  companyName,
  fantasyName,
  cnpj,
  ie,
  cep,
  street,
  complement,
  district,
  number,
  city,
  state,
}) => {
  return (
    <CardContainer key={companyName}>
      <img
        src="https://images.clipartlogo.com/files/images/18/186069/isocity-factory_p"
        alt="Factor"
      />
      <div className="cardListContent">
        <span>
          <span>Razao Social:</span> {companyName}
        </span>
        <span>
          <span>Nome Fantasia:</span> {fantasyName}
        </span>
        <span>
          <span>CNPJ:</span> {cnpj}
        </span>
        <span>
          <span>I.E.:</span> {ie}
        </span>
        <span>
          <span>CEP:</span> {cep}
        </span>
        <span>
          <span>Logradouro:</span> {street}
        </span>
        <span>
          <span>Complemento:</span> {complement}
        </span>
        <span>
          <span>Bairro:</span> {district}
        </span>
        <span>
          <span>Numero:</span> {number}
        </span>
        <span>
          <span>Cidade:</span> {city}
        </span>
        <span>
          <span>UF:</span> {state}
        </span>
      </div>
    </CardContainer>
  );
};

export default Card;
