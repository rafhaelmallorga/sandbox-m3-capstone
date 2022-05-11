import { CardProductContainer } from "./styled";

const CardProduct = ({ name, category, price, image }) => {
  return (
    <CardProductContainer key={name}>
      <span>Nome: {name}</span>
      <img src={image} alt={name} />
      <span>Categoria: {category}</span>

      <span>Preço: {price}</span>
    </CardProductContainer>
  );
};

export default CardProduct;
