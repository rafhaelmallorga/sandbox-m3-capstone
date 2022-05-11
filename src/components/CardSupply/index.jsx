import { CardSupplyContainer } from "./styled";

const CardSupply = ({ name, supplier, category, quantity, price }) => {
  return (
    <CardSupplyContainer key={name}>
      <span>{name}</span>
      <span>{supplier}</span>
      <span>{category}</span>
      <span>{quantity}</span>
      <span>{price}</span>
    </CardSupplyContainer>
  );
};

export default CardSupply;
