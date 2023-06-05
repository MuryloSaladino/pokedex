import { useEffect, useRef, useState} from "react";
import { StyledBottomDiv, StyledListItem, StyledSpriteDiv, StyledTopRDiv, StyledTopLDiv, StyledType, StyledButton, StyledBlankButton } from "../styles.js";
import { TextMedium, Title3 } from "../../../styles/typography";
import { v4 as uuidv4 } from 'uuid'
import { pokeAPI } from "../../../APIs/pokeAPI.js";

export function PokeCard({name, caughtPokemon, favoritePokemon}) {

    const [pokeData, setPokeData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        async function getPokeData() {
            try {
                const get = (await pokeAPI.get(`/` + name)).data
                setPokeData(get)
            }
            catch(error) {
                console.log(error.message)
                setError(true)
            }
            finally {
                setLoading(false)
            }
        }
        getPokeData()
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
                    <TextMedium>
                        #{  
                            pokeData.id.toString().length === 1 ?
                                '00' + pokeData.id :
                            pokeData.id.toString().length === 2 ?
                                '0' + pokeData.id :
                            pokeData.id
                        }
                    </TextMedium>
                </StyledTopLDiv>

                <StyledTopRDiv>
                    <CaughtFilter
                        name={name}
                        caughtPokemon={caughtPokemon}
                    />
                    <FavoriteFilter
                        name={name}
                        favoritePokemon={favoritePokemon}
                    />
                </StyledTopRDiv>

                <StyledBottomDiv>
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



function CaughtFilter({name, caughtPokemon}) {

    const [caught, setCaught] = useState(JSON.parse(localStorage.getItem('caughtPokemon').includes(name)) ? true : false)

    return(
        <StyledButton
            onClick={ () =>{
                if(caught) {
                    setCaught(false)
                    caughtPokemon.current = caughtPokemon.current.filter(pokemonName => pokemonName !== name)
                    localStorage.setItem('caughtPokemon', JSON.stringify(caughtPokemon))
                }else {
                    setCaught(true)
                    caughtPokemon.current = [...caughtPokemon.current, name]
                    localStorage.setItem('caughtPokemon', JSON.stringify(caughtPokemon))
                }
            }}
            bg={caught}
        />
    )
}

function FavoriteFilter({name, favoritePokemon}) {

    const [favorite, setFavorite] = useState(JSON.parse(localStorage.getItem('favoritePokemon').includes(name)) ? true : false)

    return(
        <StyledBlankButton 
        onClick={ () =>{
            if(favorite) {
                setFavorite(false)
                favoritePokemon.current = favoritePokemon.current.filter(pokemonName => pokemonName !== name)
                localStorage.setItem('favoritePokemon', JSON.stringify(favoritePokemon))
            }else {
                setFavorite(true)
                favoritePokemon.current = [...favoritePokemon.current, name]
                localStorage.setItem('favoritePokemon', JSON.stringify(favoritePokemon))
            }
        }}
        bg={favorite}
        />
    )
}