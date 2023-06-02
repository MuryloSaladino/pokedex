import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    height: 100px;
    background-color: ${({bg}) => bg ? 'var(--poke-grey2)' : 'transparent'};
    backdrop-filter: blur(5px);
    padding: 20px 5px;
    box-shadow: 0 0 20px rgba(0,0,0,.3);

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px 50px;

    position: fixed;
    top: 0;
    z-index: 1;
    transition: 0.3s;

    div{
        display: flex;
        align-items: center;
        gap: 15px;
    }
`