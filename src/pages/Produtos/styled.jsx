import styled from "styled-components";

export const ProdutosContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: lightgray;
  .contentPageContainer {
    width: 100%;
    min-height: calc(100vh - 70px);

    display: flex;
    flex-wrap: nowrap;

    .pageContentProdutos {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: nowrap;
    }
    .formularioProduto {
      width: 300px;

      display: flex;
      flex-direction: column;

      background-color: #ffffff;
      box-shadow: 0 0 10px black;

      padding: 10px;
      margin: 20px;

      input {
        margin: 5px 0;
        height: 20px;
      }
      button {
        height: 30px;
        background-color: #6464fd;
        color: white;
        font-weight: bold;
        border-style: none;
      }
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 70px);
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    font-size: 40px;
    font-family: sans-serif;
    font-weight: bold;
    color: green;
    margin: 20px 0;
  }
  div {
    .listProviders {
      width: 100%;
      height: 100%;
      max-height: 70vh;
      background-color: white;
      box-shadow: 0 0 5px grey;

      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      overflow-y: scroll;
    }
  }
`;
