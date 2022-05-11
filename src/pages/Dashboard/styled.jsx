import styled from "styled-components";

export const DashboardContainer = styled.section`
  width: 100%;
  min-height: calc(100vh - 70px);
  background-color: lightgray;

  .contentPageContainer {
    width: 100%;
    min-height: calc(100vh - 70px);

    display: flex;
    flex-wrap: nowrap;
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
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
`;
