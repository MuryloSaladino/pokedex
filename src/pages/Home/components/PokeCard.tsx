import { Box, Typography } from "@mui/material";

interface IPokeCardProps {
    id: string | number;
    name: string;
}

export default function PokeCard({ id, name }:IPokeCardProps) {

    return(
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="h4">#{ id } { name }</Typography>
        </Box>
    )
}