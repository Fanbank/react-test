import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
    font-size: 16px;
  }

  @keyframes drop {
    from {
      transform: translateY(-100vw);
    }

    to {
      transform: translateY(0px);
    }
  }
`;
