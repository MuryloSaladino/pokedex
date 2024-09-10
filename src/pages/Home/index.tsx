import { Container, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { ReactNode, useCallback, useEffect, useState } from "react";
import PokeAPI from "../../service/PokeAPI";
import { v4 as uuid } from "uuid";
import PokeCard from "./components/PokeCard";

export default function Home():ReactNode {

    const [pokemons, setPokemons] = useState<any[]>([])

    const getPokemonData = useCallback(async () => {
        const response = await PokeAPI.get('/pokemon?limit=9&offset=0')
        setPokemons(response.data.results)
    }, [])

    useEffect(() => {
        getPokemonData()
    }, [])

    return(
        <Stack gap={5} >
            <Container maxWidth="xl">
                <Typography 
                    variant="h1"
                    color="primary"
                    textAlign="center"
                    sx={{ '-webkit-text-stroke': "3px black" }}
                    fontFamily="Pokemon Solid"
                >Pokedéx</Typography>

                <Grid container spacing={3} marginTop={10}>
                    {pokemons.map( pokemon => (
                        <Grid key={uuid()} size={{ xs:12, sm:6, md:4, lg:4, xl:3 }}>
                            <PokeCard 
                                id={pokemon.url.substring(34).replace("/", "")} 
                                name={pokemon.name} 
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Stack>
    )
}