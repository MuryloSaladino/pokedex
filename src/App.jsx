import { useEffect, useRef, useState } from "react"
import { pokeAPI } from "./APIs/pokeAPI"
import { ResetCSS } from "./styles/reset.js"
import { GlobalStyles } from "./styles/Global"
import { Animations } from "./styles/Animations"
import { Header } from "./Components/Header"
import { PokeCardContainer } from "./Components/PokeCardContainer"

export function App() {

    const [pokeData, setPokeData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    const [filter, setFilter] = useState(['', false, false])

    const caughtPokemon = useRef([])
    const favoritePokemon = useRef([])
    
    useEffect(() => {
        async function getPokeData() {
            try{
                const get = (await pokeAPI.get('?limit=151&offset=0')).data.results
                setPokeData(get.map((pokemon) => pokemon.name))
            }
            catch(error) {
                console.error(error.message)
            }
            finally{
                setLoading(false)
            }
        }
        getPokeData()
    }, [])

    useEffect(() => {
        function checkStorage() {
            if(localStorage.getItem('caughtPokemon')) {
                caughtPokemon.current = JSON.parse(localStorage.getItem('caughtPokemon')).current
                favoritePokemon.current = JSON.parse(localStorage.getItem('favoritePokemon')).current
            } else{
                localStorage.setItem('caughtPokemon', JSON.stringify(caughtPokemon))
                localStorage.setItem('favoritePokemon', JSON.stringify(favoritePokemon))
            }
        }
        checkStorage()
    }, [])


    return(
        <>
            <ResetCSS/>
            <GlobalStyles/>
            <Animations/>

            <Header
                setFilter={setFilter}
                filter={filter}
            />

            <PokeCardContainer
                renderPokemons={
                    filter[1] ? caughtPokemon.current :
                    filter[2] ? favoritePokemon.current :
                    pokeData
                }
                filter={filter}
                setFilter={setFilter}
                caughtPokemon={caughtPokemon}
                favoritePokemon={favoritePokemon}
            />
        </>
    )
}