import { styled, Typography } from "@mui/material";

export const SMainTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontFamily: "Pokemon Solid",
    textAlign: "center",
    WebkitTextStroke: "3px black"
}))