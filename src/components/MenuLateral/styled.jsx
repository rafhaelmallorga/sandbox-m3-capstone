import styled from "styled-components";

export const MenuContainer = styled.div`
  max-width: 200px;
  min-height: calc(100vh - 70px);

  background-color: white;
  box-shadow: 0 0 10px black;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  a {
    background-color: red;
    text-decoration: none;

    font-weight: bold;
    font-size: 22px;

    margin: 10px 0;
    padding: 5px;
    border-radius: 10px;
  }
`;
