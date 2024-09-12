import { useCallback, useEffect, useRef, useState } from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SPokeBox, SPokeBoxHidden } from "./styles";
import PokeAPI from "../../../../service/pokeAPI";

interface IPokeCardProps {
    id: string | number;
    name: string;
}

export default function PokeCard({ id, name }:IPokeCardProps) {

    const [pokeData, setPokeData] = useState<any>()
    const [color, setColor] = useState<string>()
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [loading, setLoading] = useState(false)

    const getPokeData = useCallback(async () => {
        setLoading(true)
        const response = await PokeAPI.get(`/pokemon/${name}/`)
        setPokeData(response.data)
    }, [name])

    useEffect(() => {
        if(!pokeData) return;
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = pokeData.sprites.front_default;
        img.onload = () => {
            const canvas:HTMLCanvasElement|null = canvasRef.current;
            if(!canvas) return;
            const context = canvas?.getContext('2d', { willReadFrequently: true });
            if(!context) return;
            context.drawImage(img, canvas.width/2, 0);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const pixelData = imageData.data;
            const colorCounts:{ [key:string]: any } = {};
            let maxCount = 0;
            let mostCommonColor = [0, 0, 0];
        
            for (let i = 0; i < pixelData.length; i += 4) {
                const r = pixelData[i];
                const g = pixelData[i + 1];
                const b = pixelData[i + 2];
                if ((r < 25 && g < 25 && b < 25) || (r > 230 && g > 230 && b > 230)) {
                    continue;
                }
                const color = `${r},${g},${b}`;
        
                if (!colorCounts[color]) {
                    colorCounts[color] = 0;
                }
                colorCounts[color]++;
        
                if (colorCounts[color] > maxCount && !(r === 0 && g === 0 && b === 0)) {
                    maxCount = colorCounts[color];
                    mostCommonColor = [r, g, b];
                }
            }
            setColor(`rgba(${mostCommonColor[0]}, ${mostCommonColor[1]}, ${mostCommonColor[2]}, 0.9)`);
        };
        setLoading(false)
    }, [pokeData])

    useEffect(() => {
        getPokeData()
    }, [])

    const playCry = useCallback(async () => {
        if(pokeData) {
            const audio = new Audio(pokeData.cries.latest)
            audio.oncanplay = () => { audio.play() }
        }
    }, [pokeData])

    return(
        <>
            {
                loading ?
                <Skeleton width={"100%"} height={150} variant="rectangular"/> :

                pokeData &&
                <Link to={"/p/" + name}>
                    <Box
                        sx={{ display: "none" }}
                        component="canvas" 
                        ref={canvasRef}
                    />
                    <SPokeBox color={color} onMouseEnter={playCry}>
                        <Typography 
                            variant="h4" 
                            color="textSecondary" 
                            sx={{ WebkitTextStroke: "1px grey" }}
                        >#{ id } { name }</Typography>
                        <Box component="img" src={pokeData.sprites.front_default}/>
                        <SPokeBoxHidden color={color}>
                            <Box 
                                component="img"
                                src={pokeData.sprites.other.showdown.front_default} 
                            />
                        </SPokeBoxHidden>
                    </SPokeBox>
                </Link>
            }
        </>
    )
}