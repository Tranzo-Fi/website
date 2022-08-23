import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #1d1d1f;
        font-family: 'Roboto Mono';
        color: white;
    }
`;

export default GlobalStyle;
