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

export const StyledCaughtButton = styled.button`
    width: 30px;
    height: 30px;

    background-color: transparent;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: ${({filter}) => filter[1] ? 'none' : 'solid 1px var(--poke-grey9)'};
    border-radius: 50%;

    transition: 0.3s;
`

export const StyledFavoriteButton = styled.button`
    width: 30px;
    height: 30px;

    background-color: transparent;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    border: none;

    :hover{
        filter: drop-shadow(0 0 20px #ffe94d)
    }
`

export const StyledSearchDiv = styled.div`
    width: 300px;
    height: 50px;

    padding: 5px;
    border: solid 2px var(--poke-grey9);
    border-radius: 25px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    img{
        width: 30px;
    }
`

export const StyledInput = styled.input`
    width: 70%;
    height: 100%;

    background-color: transparent;
    border: none;
    outline: none;

    font-size: 1rem;

    justify-self: center;
`

export const StyledImg = styled.img`
    width: ${({width}) => width}px;
`