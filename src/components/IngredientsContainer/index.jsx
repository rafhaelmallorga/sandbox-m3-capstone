import { IngredientsContainer } from "./styled";
import { useIngredients } from "../../Providers/Ingredientes";
import { useEffect, useState } from "react";
import axios from "axios";

const IngredientsField = ({ supplies }) => {
  const { ingredientes, setIngredientes } = useIngredients();
  const [dataForm, setDataForm] = useState({});
  const [supplyList, setSupplyList] = useState(null);

  const urlBase = "https://destoq.herokuapp.com";

  useEffect(() => {
    axios.get(`${urlBase}/supplies`).then((resp) => setSupplyList(resp.data));
  }, []);

  const handleIngredientsSubmit = () => {
    setIngredientes([]);

    const findSupply = supplyList.filter((ele) => ele.id === dataForm.supplyId);

    console.log(findSupply);

    const newSupply = { ...findSupply[0], qty: dataForm.qty };

    console.log(newSupply);

    setIngredientes([...ingredientes, newSupply]);
  };

  //   console.log(ingredientes);
  //   console.log(dataForm);

  return (
    <IngredientsContainer>
      <div>
        <select
          onChange={(e) =>
            setDataForm({
              ...dataForm,
              supplyId: +e.target.value,
            })
          }
        >
          <option disable defaultValue>
            Escolha o ingrediente...
          </option>

          {supplies?.map((el) => (
            <option value={el.id} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          onChange={(e) => setDataForm({ ...dataForm, qty: +e.target.value })}
        />
        <button onClick={handleIngredientsSubmit}>Add</button>
      </div>

      <ul>
        {ingredientes?.map((el) => (
          <li value={el.id}>
            {el.qty} - {el.name}
          </li>
        ))}
      </ul>
    </IngredientsContainer>
  );
};

export default IngredientsField;
