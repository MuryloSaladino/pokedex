import { useEffect } from "react"
import { Header } from "./Components/Header"
import { Animations } from "./styles/Animations"
import { GlobalStyles } from "./styles/Global"
import { ResetCSS } from "./styles/reset.js"
import { useState } from "react"
import { PokeCardContainer } from "./Components/PokeCardContainer"

export function App() {

    const [pokeData, setPokeData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
            .then(response => {
                if(response.ok) {return response.json()}
                throw response
            })
            .then(data => setPokeData(data.results))
            .catch((err) => {
                setError(err.message)
                setPokeData(null)
            })
            .finally(() => {
                setLoading(false)                    
            })
    }, [])

    const [filter, setFilter] = useState('')

    return(
        <>
            <ResetCSS/>
            <GlobalStyles/>
            <Animations/>

            <Header setFilter={setFilter} filter={filter}/>
            <PokeCardContainer loading={loading} pokeData={pokeData} filter={filter} />
        </>
    )
}