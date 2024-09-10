import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        fontFamily: '"Nerko One", cursive',
    },
    palette: {
        primary: {
            main: "#feca1b"
        },
        secondary: {
            main: "#3761a8"
        },
        text: {
            secondary: "#fbfbfb"
        }
    }
})

export default theme