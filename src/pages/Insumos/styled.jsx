import styled from "styled-components";

export const InsumosContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: lightgray;
  div {
    width: 100%;
    height: 100%;

    display: flex;

    form {
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
  width: calc(100% - 200px);
  min-height: calc(100vh - 70px);
  background-color: yellow;
`;
