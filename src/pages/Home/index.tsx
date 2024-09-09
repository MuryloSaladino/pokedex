import { Box, Typography } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import PokeAPI from "../../service/PokeAPI";
import { v4 as uuid } from "uuid";

export default function Home():ReactNode {

    const [pokemons, setPokemons] = useState<any[]>([])

    useEffect(() => {
        ( async () => {
            const response = await PokeAPI.get('?limit=151&offset=0')
            console.log(response)
            setPokemons(response.data.results)
        })()
    }, [])

    return(
        <Box>
            <Typography variant="h1">Home</Typography>
            <ul>
                {pokemons.map((pokemon, i) => (
                    <li key={uuid()}>#{i+1}: {pokemon.name}</li>
                ))}
            </ul>
        </Box>
    )
}