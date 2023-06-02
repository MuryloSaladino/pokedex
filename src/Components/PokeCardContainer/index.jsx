import { PokeCard } from "./PokeCard";
import { StyledList } from "./styles";
import { v4 as uuidv4 } from 'uuid'

export function PokeCardContainer({pokeData, loading}) {

    return(
        <StyledList>
            {loading ?
            <span>Carregando</span> :
            pokeData.map((pokemon) => <PokeCard key={uuidv4()} name={pokemon.name} url={pokemon.url}/>)}
        </StyledList>
    )
}

//