import styled from "styled-components";

export const CardSupplyContainer = styled.section`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 10px 0;

  background-color: #aefac5;

  border-radius: 30px;

  box-shadow: 0 0 5px grey;

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 10px black;
  }

  span {
    color: black;
    font-size: 18px;
    span {
      font-weight: bold;
      font-size: 16px;
    }
  }
`;
