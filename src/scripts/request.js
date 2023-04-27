const defaultURL = 'https://pokeapi.co/api/v2/pokemon'

export async function getThisPokemon(pokemon)   {
    const info = await fetch(`${defaultURL}/${pokemon}`)
    .then(response => response.json())

    return info
}
