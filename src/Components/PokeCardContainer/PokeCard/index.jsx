import { StyledListItem } from "../styles";

export function PokeCard({name}) {
    return(
        <StyledListItem>
            <span>{name}</span>
        </StyledListItem>
    )
}