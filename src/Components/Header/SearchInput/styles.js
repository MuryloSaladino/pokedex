import styled from "styled-components";

export const StyledSearchDiv = styled.div`
    width: 300px;
    height: 50px;

    padding: 5px;
    border: solid 1px var(--poke-grey8);
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