import styled from "styled-components";

export const MenuContainer = styled.div`
  width: 15%;
  min-height: calc(100vh - 90px);

  background-color: #f3fdf6;
  box-shadow: 0px 5px 10px #808080;

  z-index: 1;

  padding-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  a {
    width: 95%;
    background-color: #adffc8;
    text-decoration: none;

    font-family: sans-serif;
    color: black;
    font-weight: bold;
    font-size: 22px;

    margin: 5px 0;
    padding: 10px 0;
    border-radius: 5px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    transition: 0.2s;

    &:hover {
      background-color: #89f8ae;
    }

    svg {
      margin: 0 20px;
      color: black;
    }
  }
`;
