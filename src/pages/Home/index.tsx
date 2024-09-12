import { Box, Container, Grid2 as Grid, Pagination, Stack } from "@mui/material";
import { ChangeEvent, ReactNode, useCallback, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import PokeCard from "./components/PokeCard";
import { SMainTitle } from "./styles";
import { useSearchParams } from "react-router-dom";
import api_utils from "../../api.utils.json"
import { getPokemons } from "../../service/pokemon.services";

export default function Home():ReactNode {
    
    const [pokemons, setPokemons] = useState<any[]>([])
    const [query, setQuery] = useSearchParams()
    const [page, setPage] = useState<number>(Number(query.get("page")) || 1)

    const handlePageChange = useCallback((_:ChangeEvent<unknown>, value:number) => {
        if(value * api_utils.page_size < api_utils.max_pokemons + api_utils.page_size && value > 0) 
            setQuery({ page: String(value) })
        setPage(value)
    }, [])

    const getPokemonData = useCallback(async () => {
        const response = await getPokemons(page)
        setPokemons(response.data.results)
    }, [page])

    useEffect(() => {
        getPokemonData()
    }, [page])

    return(
        <Stack gap={5} >
            <Container maxWidth="xl">
                <SMainTitle 
                    variant="h1"
                >Pokedéx</SMainTitle>

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

                <Box>
                    <Pagination 
                        count={Math.round(api_utils.max_pokemons / api_utils.page_size) + 1}
                        defaultPage={Number(query.get("page")) || 1}
                        page={page}
                        onChange={handlePageChange}
                    />
                </Box>
            </Container>
        </Stack>
    )
}