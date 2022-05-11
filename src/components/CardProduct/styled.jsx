import styled from "styled-components";

export const CardProductContainer = styled.section`
  width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin: 10px;

  background-color: #9cf8caab;

  border-radius: 10px;
  box-shadow: 0 0 5px grey;

  &:hover {
    box-shadow: 0 0 10px black;
    cursor: pointer;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  span {
    color: black;
    span {
      font-weight: bold;
    }
  }
  img {
    width: 200px;
    height: 200px;

    box-shadow: 0 0 5px grey;
    margin: 5px 0;
  }
  h3 {
    font-weight: bold;
  }
  li {
    list-style: circle;
    margin-left: 30px;
  }
  .nameProd {
    font-size: 22px;
    margin-bottom: 5px;
    margin-top: 15px;
    text-align: center;
  }
`;
