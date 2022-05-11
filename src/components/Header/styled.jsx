import styled from "styled-components";

export const NavBar = styled.div`
  width: 100%;
  min-height: 70px;

  font-family: sans-serif;

  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #5ff591;

  div {
    width: 80%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .logoSection {
      max-width: fit-content;

      img {
        width: 60px;
      }
      h1 {
        margin-left: 30px;
        font-size: 40px;
        font-weight: bold;

        span {
          color: white;
        }
      }
    }
    @keyframes logo {
      from {
        text-shadow: 0px 0px 1px black;
      }
      to {
        text-shadow: 0px 0px 10px black;
      }
    }
    .provaDeConceito {
      font-size: 30px;
      font-weight: bold;
      color: red;
      animation-name: logo;
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
    nav {
      .logoutButton {
        background-color: #f35151;
        width: 100px;
        height: 40px;

        font-size: 22px;
        font-weight: bold;
        color: white;

        border-style: none;
        border-radius: 3px;

        box-shadow: 0 0 5px grey;

        transition: 0.3s;

        &:hover {
          cursor: pointer;
          filter: brightness(0.9);
          box-shadow: 0 0 10px black;
        }
      }
    }
  }
`;
