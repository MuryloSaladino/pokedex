import styled from "styled-components";

export const StyledList = styled.ul`
    width: 95%;
    max-width: 1200px;
    min-height: 50vh;

    margin: 150px auto;

    list-style: none;

    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`

export const StyledListItem = styled.li`
    width: 300px;
    height: 100px;

    border: solid 1px grey;

    display: flex;
    justify-content: center;
    align-items: center;
`