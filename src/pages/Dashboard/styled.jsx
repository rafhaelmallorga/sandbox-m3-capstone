import styled from "styled-components";

export const DashboardContainer = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: lightgray;
  div {
    width: 100%;
    height: 100%;

    display: flex;
  }
`;

export const ContentContainer = styled.div`
  width: calc(100% - 200px);
  min-height: calc(100vh - 70px);
  background-color: white;
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    min-height: 100%;
    background-color: grey;
  }
`;
