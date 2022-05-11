import { CardContainer } from "./styled";

const Card = ({ name, cnpj, ie, supplyList, state }) => {
  return (
    <CardContainer key={name}>
      <span>{name}</span>
      <span>{cnpj}</span>
      <span>{ie}</span>
      <span>Supply List: {supplyList}</span>
      <span>{state}</span>
    </CardContainer>
  );
};

export default Card;
