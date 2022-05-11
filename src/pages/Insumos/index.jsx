import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import { ContentContainer, InsumosContainer } from "./styled";
import { useState, useEffect } from "react";
import axios from "axios";
import CardSupply from "../../components/CardSupply";

const Insumos = () => {
  const [dataForm, setDataForm] = useState({});
  const [supplies, setSupplies] = useState(null);
  const [providers, setProviders] = useState(null);

  const urlBase = "https://destoq.herokuapp.com";

  useEffect(() => {
    axios.get(`${urlBase}/supplies`).then((resp) => {
      console.log(resp.data);
      setSupplies(resp.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${urlBase}/providers`).then((resp) => {
      console.log(resp.data);
      setProviders(resp.data);
    });
  }, []);

  const getApi = () => {
    axios.get(`${urlBase}/supplies`).then((resp) => {
      console.log(resp.data);
      setSupplies(resp.data);
    });
  };

  console.log(dataForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${urlBase}/supplies`, {
        ...dataForm,
        userId: 1,
        ownerId: 1,
      })
      .then((resp) => {
        getApi();
        console.log(resp);
      });

    axios.get(`${urlBase}/supplies`).then((resp) => {
      console.log(resp.data);
      setSupplies(resp.data);
    });
  };

  return (
    <InsumosContainer>
      <Header />
      <div className="contentPageContainer">
        <MenuLateral />
        <ContentContainer>
          <h1>Insumos</h1>
          <div className="contentContentInsumo">
            <form
              className="formularioInsumo"
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                type="text"
                placeholder="Insumo"
                onChange={(e) =>
                  setDataForm({ ...dataForm, name: e.target.value })
                }
              />
              <select
                name="Fornecedor"
                onChange={(e) =>
                  setDataForm({ ...dataForm, providerId: +e.target.value })
                }
              >
                <option disable selected value>
                  Escolha seu fornecedor...
                </option>
                {providers?.map((ele) => (
                  <option value={ele.id}>{ele.fantasyName}</option>
                ))}
              </select>

              <input
                type="text"
                placeholder="Categoria"
                onChange={(e) =>
                  setDataForm({ ...dataForm, category: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Preco"
                onChange={(e) =>
                  setDataForm({ ...dataForm, price: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Quantidade"
                onChange={(e) =>
                  setDataForm({ ...dataForm, quantity: e.target.value })
                }
              />

              <button type="submit">Cadastrar</button>
            </form>
            <section className="listProviders">
              {supplies &&
                supplies.map((el) => (
                  <CardSupply
                    name={el.name}
                    category={el.category}
                    quantity={el.quantity}
                    price={el.price}
                  />
                ))}
            </section>
          </div>
        </ContentContainer>
      </div>
    </InsumosContainer>
  );
};

export default Insumos;
