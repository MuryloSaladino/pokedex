import { PokeCard } from "./PokeCard";
import { StyledList } from "./styles";
import { v4 as uuidv4 } from 'uuid'

export function PokeCardContainer({renderPokemons, filter, caughtPokemon, favoritePokemon}) {

    return(
        <StyledList>
            {renderPokemons.filter((pokemon) => pokemon.includes(filter[0])).map((pokemon) => 
                <PokeCard
                    key={uuidv4()}
                    name={pokemon}
                    caughtPokemon={caughtPokemon}
                    favoritePokemon={favoritePokemon}
                />)
            }
        </StyledList>
    )
}