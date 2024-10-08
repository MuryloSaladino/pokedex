import { Box, Typography } from "@mui/material";
import { ReactNode, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokeAPI from "../../service/pokeAPI";

export default function PokeDetail():ReactNode {

    const { name } = useParams()

    const [pokeData, setPokeData] = useState<any>()

    const getPokeData = useCallback(async () => {
        const response = await PokeAPI.get(`/pokemon/${name}/`)
        setPokeData(response.data)
    }, [name])

    useEffect(() => {
        getPokeData()
    }, [])

    return(
        <>
            {
                pokeData &&
                <Box>
                    <Typography variant="h3">#{ pokeData.id }</Typography>
                    <Typography variant="h3">{ pokeData.name }</Typography>
                    <Box 
                        component="img"
                        src={ pokeData.sprites.front_default } 
                        alt={ pokeData.name }
                        sx={{ width: 300 }}
                    />
                </Box>
            }
        </>
    )
}