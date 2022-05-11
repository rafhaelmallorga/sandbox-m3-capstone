import { CardProductContainer } from "./styled";

const CardProduct = ({
  name,
  category,
  price,
  image,
  description,
  ingredients,
}) => {
  return (
    <CardProductContainer key={name}>
      <span className="nameProd">
        <span>Nome: </span> {name}
      </span>
      <img src={image} alt={name} />
      <div>
        <span>
          <span>Categoria: </span> {category}
        </span>
        <span>
          <span>Preço: </span> {price}
        </span>
        <span>
          <span>Descrição: </span> {description}
        </span>
        <h3>Ingredientes:</h3>
        <ul>
          {ingredients?.map((ele) => (
            <li>{ele.name}</li>
          ))}
        </ul>
      </div>
    </CardProductContainer>
  );
};

export default CardProduct;
