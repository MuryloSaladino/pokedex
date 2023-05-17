import { getThisPokemon } from "./request.js";

export let pokemonOnScreen = []

export async function renderPokemon(endPoint, offset = 1)  {
    const container = document.querySelector('main')

    for(let i = offset; i <= endPoint; i++)  {
        let poke = await getThisPokemon(i)
        
        container.insertAdjacentHTML('beforeend', `
            <div id="${poke.id}-${poke.name}" class="poke-card fade-in">
                <div class="info-div">
                    <div class="name-div">
                        <h2 class="text-2xl font-thin">#${poke.id.toString().length === 1 ? '00' + poke.id : poke.id.toString().length === 2 ? '0' + poke.id : poke.id}</h2>
                        <h2 class="text-2xl">${poke.name.replace(`${poke.name[0]}`, `${poke.name[0].toUpperCase()}`)}</h2>
                        <div class="filters-div">
                        <i class="fa-regular fa-star text-2xl text-black duration-300 star"></i>
                        <i class="fa-regular fa-circle text-2xl text-black duration-300 caught"></i>
                        </div>
                    </div>
                    <div id="${poke.id}-types" class="types-div">
                    </div>
                </div>
                <div class="sprite-div">
                    <img src="${poke.sprites.front_default}">
                </div>
            </div>

            
        `)

        getMostCommonRGB(poke.sprites.front_default).then(color => document.getElementById(`${poke.id}-${poke.name}`).style.backgroundColor = color)

        const currentTypes = document.getElementById(`${poke.id}-types`)
        poke.types.forEach(types => currentTypes.insertAdjacentHTML('beforeend', `
        <span>${types.type.name.replace(`${types.type.name[0]}`, `${types.type.name[0].toUpperCase()}`)}</span>
        `))
    }

}



function getMostCommonRGB(imageUrl) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = imageUrl;
        img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const context = canvas.getContext("2d");
            context.drawImage(img, 0, 0);
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
            const pixelData = imageData.data;
            const colorCounts = {};
            let mostCommonColor = [0, 0, 0];
            let maxCount = 0;
            for (let i = 0; i < pixelData.length; i += 4) {
                const r = pixelData[i];
                const g = pixelData[i + 1];
                const b = pixelData[i + 2];
                if ((r < 25 && g < 25 && b < 25) || (r > 230 && g > 230 && b > 230)) {
                continue; // Skip black pixels
                }
                const color = `${r},${g},${b}`;
                if (!colorCounts[color]) {
                colorCounts[color] = 0;
                }
                colorCounts[color]++;
                if (colorCounts[color] > maxCount) {
                mostCommonColor = [r, g, b];
                maxCount = colorCounts[color];
                }
            }
            resolve(`rgb(${mostCommonColor[0]}, ${mostCommonColor[1]}, ${mostCommonColor[2]})`);
        };
        img.onerror = () => {
            reject("Unable to load image");
        };
    });
}


export function filterPokemon()  {

    const input = document.querySelector('input')
    const nodeList = document.querySelectorAll('.poke-card')
    const pokemonOnScreen = Array.prototype.slice.call(nodeList)

    input.addEventListener('change', () => {

        pokemonOnScreen.forEach(pokemon => pokemon.style.display = 'none');

        pokemonOnScreen.forEach(pokemon => {
            const filterValue = input.value.toLowerCase();
            const typesDiv = document.getElementById(`${pokemon.id.substring(0, pokemon.id.indexOf('-'))}-types`).childNodes;
            const type = typesDiv[2].innerText.toLowerCase();
            const subtype = typesDiv.length > 4 ? typesDiv[5].innerText.toLowerCase() : 'no type here';

            if(pokemon.id.includes(filterValue))    {
                pokemon.style.display = 'flex'
            }else if(type.includes(filterValue) || subtype.includes(filterValue))   {
                pokemon.style.display = 'flex'
            }
        });
    })
}

export function filterCaugth()  {

    const button = document.querySelector('.caugth-button');
    const nodeList = document.querySelectorAll('.caugth-button')
    const pokeButtons = Array.prototype.slice.call(nodeList)

    pokeButtons.forEach(element => element.addEventListener('click', () => element.classList.toggle('has-caugth')))

    
}

export function filterFavorites()   {
    const button = document.querySelector('.star-svg');
    const nodeList = document.querySelectorAll('.star-svg')
    const pokeButtons = Array.prototype.slice.call(nodeList)

    pokeButtons.forEach(element => element.addEventListener('click', () => element.classList.toggle('is-favorite')))
}