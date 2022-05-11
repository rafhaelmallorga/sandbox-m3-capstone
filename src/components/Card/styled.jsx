import styled from "styled-components";

export const CardContainer = styled.section`
  width: 23%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 10px;

  background-color: #84f3c553;

  border-radius: 10px;
  box-shadow: 0 0 5px black;

  &:hover {
    box-shadow: 0 0 10px black;
    cursor: pointer;
  }

  img {
    width: 150px;
  }
  .cardListContent {
    width: 100%;
    height: 100%;

    background-color: #84f3c553;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    span {
      color: black;
      margin-left: 10px;
      span {
        font-weight: bold;
        font-size: 16px;
      }
    }
  }
`;
