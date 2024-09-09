import { Box } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PokeDetail():ReactNode {

    const { id } = useParams()

    const [pokemonData, setPokemonData] = useState<any>()

    // useEffect(() => {
    //     (async () => {
    //         const response = 
    //     })()
    // }, [])

    return(
        <Box>Pokemon: { id }</Box>
    )
}