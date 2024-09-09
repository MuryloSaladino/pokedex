import { Box } from "@mui/material";
import { ReactNode } from "react";
import { useParams } from "react-router-dom";

export default function PokeDetail():ReactNode {

    const { id } = useParams()

    return(
        <Box>Pokemon: { id }</Box>
    )
}