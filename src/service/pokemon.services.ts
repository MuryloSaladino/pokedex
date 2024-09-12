import PokeAPI from "./pokeAPI"
import api_utils from "../api.utils.json"

export const getPokemons = async (page:number) => {
    return await PokeAPI.get(
        `/pokemon?limit=${api_utils.page_size}&offset=${(page-1)*20}`
    )
}