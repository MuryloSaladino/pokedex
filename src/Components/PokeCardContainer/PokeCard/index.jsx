import { useEffect, useRef } from "react";
import { StyledBottomDiv, StyledListItem, StyledSpriteDiv, StyledTopRDiv, StyledTopLDiv, StyledType } from "../styles";
import { useState } from "react";
import { TextMedium, Title3, Title4 } from "../../../styles/typography";
import { v4 as uuidv4 } from 'uuid'

export function PokeCard({url}) {

    const [pokeData, setPokeData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const [bgColor, setBgColor] = useState(null)
    const canvasRef = useRef(null)

    useEffect(() => {
        fetch(url)
            .then(response => {
                if(response.ok) {return response.json()}
                throw response
            })
            .then(data => setPokeData(data))
            .catch(() => {
                setError(true)
                setPokeData(null)
            })
            .finally(() => {
                setLoading(false)                    
            })
    }, [])

    
    if(loading) {
        return(
            <ListItem>Carregando</ListItem>
        )
    }
    
    if(error) {
        return(
            <ListItem>Carregando</ListItem>
            )
    }

    return(
        <ListItem imageUrl={pokeData.sprites.front_default}>
            <div>
                <StyledTopLDiv>
                    <Title3>{pokeData.name.replace(`${pokeData.name[0]}`, `${pokeData.name[0].toUpperCase()}`)}</Title3>
                    <TextMedium>#{pokeData.id.toString().length === 1 ? '00' + pokeData.id : pokeData.id.toString().length === 2 ? '0' + pokeData.id : pokeData.id}</TextMedium>
                </StyledTopLDiv>

                <StyledTopRDiv /* filtros */>

                </StyledTopRDiv>

                <StyledBottomDiv /* types */>
                    {pokeData.types.map((type) => 
                        <StyledType key={uuidv4()}>{type.type.name}</StyledType>
                    )}
                </StyledBottomDiv>
            </div>

            <StyledSpriteDiv>
                <img src={pokeData.sprites.front_default} alt="Pokemon Sprite" />
            </StyledSpriteDiv>
        </ListItem>
    )
}



function ListItem({imageUrl, children}) {

    const canvasRef = useRef(null);
    const [mostCommonColor, setMostCommonColor] = useState(null);

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = imageUrl;
        img.onload = () => {
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');
          context.drawImage(img, 0, 0);
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const pixelData = imageData.data;
          const colorCounts = {};
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
    
          const rgbString = `rgba(${mostCommonColor[0]}, ${mostCommonColor[1]}, ${mostCommonColor[2]}, 0.9)`;
          setMostCommonColor(rgbString);
        };
      }, [imageUrl]);

    return(
        <StyledListItem style={{backgroundColor: mostCommonColor}}>
            <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
            {children}
        </StyledListItem>
    )
}