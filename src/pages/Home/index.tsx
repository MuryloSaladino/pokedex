import { Grid2 as Grid, Stack, Typography } from "@mui/material";
import { ReactNode, useCallback, useEffect, useState } from "react";
import PokeAPI from "../../service/PokeAPI";
import { v4 as uuid } from "uuid";
import PokeCard from "./components/PokeCard";

export default function Home():ReactNode {

    const [pokemons, setPokemons] = useState<any[]>([])

    const getPokemonData = useCallback(async () => {
        const response = await PokeAPI.get('/pokemon?limit=151&offset=0')
        console.log(response);
        setPokemons(response.data.results)
    }, [])

    useEffect(() => {
        getPokemonData()
    }, [])

    return(
        <Stack gap={5} >
            <Typography variant="h3">Home</Typography>

            <Grid container spacing={3}>
                {pokemons.map( pokemon => (
                    <Grid key={uuid()} size={{ xs:12, sm:6, md:4, lg:4, xl:3 }}>
                        <PokeCard 
                            id={pokemon.url.substring(34).replace("/", "")} 
                            name={pokemon.name} 
                        />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}