import { CardSupplyContainer } from "./styled";

const CardSupply = ({ name, category, quantity, price }) => {
  return (
    <CardSupplyContainer key={name}>
      <span>
        <span>Nome:</span> {name}
      </span>
      <span>
        <span>Categoria:</span> {category}
      </span>
      <span>
        <span>Quantidade</span> {quantity}
      </span>
      <span>
        <span>Preço:</span> R$ {Number(price).toFixed(2)}
      </span>
    </CardSupplyContainer>
  );
};

export default CardSupply;
