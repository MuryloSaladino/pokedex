import { Box, styled } from "@mui/material";

interface ISPokeBox {
    color?: string
}

export const SPokeBoxHidden = styled(Box)<ISPokeBox>(({ color }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: color,
    transition: "0.3s",
    transform: "translateX(100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}))

export const SPokeBox = styled(Box)<ISPokeBox>(({ color }) => ({
    display: "flex", 
    justifyContent: "space-between",
    backgroundColor: color,
    padding: 8,
    borderRadius: 4,
    height: 150,
    position: "relative",
    overflow: "hidden",
    ":hover": {
        "div": {
            transform: "translate(0)"
        }
    } 
}))
