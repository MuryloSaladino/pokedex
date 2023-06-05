import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
    }
    *,*::before,*::after {
        box-sizing: border-box;
    }
    i{
        font-size: 1rem;
        color: black;
    }
`