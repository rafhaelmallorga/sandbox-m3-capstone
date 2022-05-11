import styled from "styled-components";

export const IngredientsContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  height: 240px;
  background-color: #f0f0f0;

  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    height: 150px;

    display: flex;
    flex-direction: column;

    select {
      height: 30px;
    }
    ul {
      height: 300px;
      background-color: grey;
    }
  }
`;
