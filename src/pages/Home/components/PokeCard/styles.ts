import { Box, styled } from "@mui/material";

interface ISPokeBox {
    color?: string
}

export const SPokeBox = styled(Box)<ISPokeBox>(({ color }) => ({
    opacity: color ? 1 : 0,
    transition: "0.5s",
    display: "flex", 
    justifyContent: "space-between",
    backgroundColor: color,
    padding: 8,
    borderRadius: 4,

    'img': {
        transition: "0.1s"
    },
    ':hover': {
        'img': {
            transform: "scale(1.4)"
        }
    }
}))