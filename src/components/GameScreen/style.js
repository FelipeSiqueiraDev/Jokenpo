import { styled } from "styled-components";

export const StyledGameScreen = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
    height: 250px;
  }

  button {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 15px;

    background-color: #a99fa9;
  }

  button:hover {
    background-color: #a83b41;
    cursor: pointer;
  }

  p {
    text-align: center;
    margin: 5px 0;
  }
  p:first-child {
    margin-top: 40px;
  }
  p.tooltip .tooltiptext {
    width: 120px;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  }
  h3 {
    margin-top: 20px;
    text-align: center;
    color: #a83b41;
  }
`;
