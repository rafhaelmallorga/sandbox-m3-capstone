import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import { ContentContainer, ProdutosContainer } from "./styled";
import { useState, useEffect } from "react";
import axios from "axios";
import CardProduct from "../../components/CardProduct";
import IngredientsField from "../../components/IngredientsContainer";
import { useIngredients } from "../../Providers/Ingredientes";

const Produtos = () => {
  const [dataForm, setDataForm] = useState({});
  const [supplies, setSupplies] = useState(null);
  const [products, setProducts] = useState(null);
  const [isMarked, setIsMarked] = useState(false);
  const [adminToken, setAdminToken] = useState(null);
  const { ingredientes, setIngredientes } = useIngredients();

  const urlBase = "https://destoq.herokuapp.com";

  useEffect(() => {
    axios
      .post(`${urlBase}/login`, {
        email: "destoq@proton.me",
        password: "123456",
      })
      .then((res) => setAdminToken(res.data.accessToken));
  }, []);

  console.log(adminToken);

  const getApi = () => {
    axios.get(`${urlBase}/products`).then((resp) => {
      console.log(resp.data);
      setProducts(resp.data);
    });
  };

  useEffect(() => {
    axios.get(`${urlBase}/supplies`).then((resp) => {
      console.log(resp.data);
      setSupplies(resp.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`${urlBase}/products`).then((resp) => {
      console.log(resp.data);
      setProducts(resp.data);
    });
  }, []);

  console.log(dataForm);

  const handleSubmit = () => {
    axios
      .post(
        `${urlBase}/products`,
        {
          ...dataForm,
          userId: 1,
          ownerId: 1,
          ingredients: [...ingredientes],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${adminToken}`,
          },
        }
      )
      .then((resp) => {
        getApi();
        console.log(resp);
        setIngredientes([]);
      });

    axios.get(`${urlBase}/supplies`).then((resp) => {
      console.log(resp.data);
      setSupplies(resp.data);
    });
  };

  return (
    <ProdutosContainer>
      <Header />
      <div>
        <MenuLateral />
        <ContentContainer>
          <h1>Produtos</h1>
          <div>
            <div className="formulario">
              <input
                type="text"
                placeholder="Nome do Produto"
                onChange={(e) =>
                  setDataForm({ ...dataForm, name: e.target.value })
                }
              />
              {/* <select
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
              </select> */}

              <input
                type="checkbox"
                id="ingredients"
                onChange={() => {
                  setIsMarked(!isMarked);
                }}
              />
              <label htmlFor="ingredients">Possui ingredientes?</label>
              {isMarked && <IngredientsField supplies={supplies} />}
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
                placeholder="URL img do Produto"
                onChange={(e) =>
                  setDataForm({ ...dataForm, image: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Descricao"
                onChange={(e) =>
                  setDataForm({ ...dataForm, description: e.target.value })
                }
              />

              <button onClick={() => handleSubmit()}>Cadastrar</button>
            </div>
            <section className="listProviders">
              {products?.map((el) => (
                <CardProduct
                  key={el.id}
                  name={el.name}
                  category={el.category}
                  price={el.price}
                  image={el.image}
                />
              ))}
            </section>
          </div>
        </ContentContainer>
      </div>
    </ProdutosContainer>
  );
};

export default Produtos;
