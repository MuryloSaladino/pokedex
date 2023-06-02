import styled from "styled-components";

export const StyledList = styled.ul`
    width: 95%;
    max-width: 1200px;
    min-height: 50vh;

    margin: 150px auto;

    list-style: none;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
`

export const StyledListItem = styled.li`
    width: 350px;
    height: 100px;

    padding: 5px 15px;
    border-radius: 15px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    position: relative;
    transition: 0.3s;

    color: var(--poke-grey9);
    font-weight: 400;

    > div{
        width: 75%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    > div > div {
        display: flex;
        justify-content: center;
    }
`

export const StyledTopLDiv = styled.div`
    width: 60%;
    height: 50%;
    line-height: 140%;
    flex-direction: column;
    gap: -10px;
`

export const StyledTopRDiv = styled.div`
    width: 40%;
    height: 50%;
    align-items: center;
    gap: 20px;
`

export const StyledBottomDiv = styled.div`
    width: 100%;
    height: 50%;
    align-items: center;
    gap: 8px;
`

export const StyledSpriteDiv = styled.span`
    height: 100%;
    width: 100px;

    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50% 15px 15px 50%;

    position: absolute;
    right: 0;
`

export const StyledType = styled.span`
    padding: 2px 25px;
    border: solid 1px var(--poke-grey7);
    border-radius: 15px;

    font-size: 1rem;
    font-weight: 600;
    color: var(--poke-grey8);
`