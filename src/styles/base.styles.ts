import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`;

export const Main = styled.main`
  height: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
