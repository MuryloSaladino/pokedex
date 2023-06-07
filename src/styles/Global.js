import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --poke-grey1: #F8F9FA;
        --poke-grey2: #E9ECEF;
        --poke-grey3: #DEE2E6;
        --poke-grey4: #CED4DA;
        --poke-grey5: #ADB5BD;
        --poke-grey6: #6C757D;
        --poke-grey7: #495057;
        --poke-grey8: #343A40;
        --poke-grey9: #212529;
        --poke-red: #ee4037;
    }



    body{
        font-family: 'M PLUS Rounded 1c', sans-serif;
        color: var(--poke-grey8);
        overflow: auto;
    }


    body::-webkit-scrollbar {
        width: 10px;
    }
    body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    body::-webkit-scrollbar-thumb {
        background-color: var(--poke-red);
    }
`