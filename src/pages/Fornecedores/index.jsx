import Header from "../../components/Header";
import MenuLateral from "../../components/MenuLateral";
import { ContentContainer, FornecedoresContainer } from "./styled";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";

const Fornecedores = () => {
  const [dataForm, setDataForm] = useState({});
  const [providers, setProviders] = useState(null);

  const urlBase = "https://destoq.herokuapp.com";

  useEffect(() => {
    axios.get(`${urlBase}/providers`).then((resp) => {
      console.log(resp.data);
      setProviders(resp.data);
    });
  }, []);

  console.log(dataForm);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${urlBase}/providers`, {
        ...dataForm,
        userId: 1,
        ownerId: 1,
        supplyList: [],
      })
      .then((resp) => console.log(resp));
  };

  console.log(providers);

  return (
    <FornecedoresContainer>
      <Header />
      <div>
        <MenuLateral />
        <ContentContainer>
          <h1>Fornecedores</h1>
          <div>
            <form action="submit" onSubmit={(e) => handleSubmit(e)}>
              <input
                type="text"
                placeholder="Razao Social"
                onChange={(e) =>
                  setDataForm({ ...dataForm, companyName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Nome Fantasia"
                onChange={(e) =>
                  setDataForm({ ...dataForm, fantasyName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="CNPJ"
                onChange={(e) =>
                  setDataForm({ ...dataForm, cnpj: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="I.E."
                onChange={(e) =>
                  setDataForm({ ...dataForm, ie: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="cep"
                onChange={(e) =>
                  setDataForm({ ...dataForm, cep: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Endereco"
                onChange={(e) =>
                  setDataForm({
                    ...dataForm,
                    address: { ...dataForm.address, street: e.target.value },
                  })
                }
              />
              <input
                type="text"
                placeholder="Numero"
                onChange={(e) =>
                  setDataForm({
                    ...dataForm,
                    address: { ...dataForm.address, number: e.target.value },
                  })
                }
              />
              <input
                type="text"
                placeholder="Complemento"
                onChange={(e) =>
                  setDataForm({
                    ...dataForm,
                    address: {
                      ...dataForm.address,
                      complement: e.target.value,
                    },
                  })
                }
              />
              <input
                type="text"
                placeholder="Bairro"
                onChange={(e) =>
                  setDataForm({
                    ...dataForm,
                    address: { ...dataForm.address, district: e.target.value },
                  })
                }
              />
              <input
                type="text"
                placeholder="Cidade"
                onChange={(e) =>
                  setDataForm({
                    ...dataForm,
                    address: { ...dataForm.address, city: e.target.value },
                  })
                }
              />
              <input
                type="text"
                placeholder="Estado"
                onChange={(e) =>
                  setDataForm({
                    ...dataForm,
                    address: { ...dataForm.address, state: e.target.value },
                  })
                }
              />
              <button type="submit">Cadastrar</button>
            </form>
            <section className="listProviders">
              {providers &&
                providers.map((el) => (
                  <Card
                    name={el.fantasyName}
                    cnpj={el.cnpj}
                    ie={el.ie}
                    supplyList={el.supplyList}
                    state={el.address.state}
                  />
                ))}
            </section>
          </div>
        </ContentContainer>
      </div>
    </FornecedoresContainer>
  );
};

export default Fornecedores;
