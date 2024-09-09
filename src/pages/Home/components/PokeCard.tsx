import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface IPokeCardProps {
    id: string | number;
    name: string;
}

export default function PokeCard({ id, name }:IPokeCardProps) {

    return(
        <Link to={"/p/" + id}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Typography variant="h4">#{ id } { name }</Typography>
            </Box>
        </Link>
    )
}