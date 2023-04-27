import { getThisPokemon } from "./request.js";

async function renderPokemon(endPoint, offset = 1)  {
    const container = document.querySelector('main')

    for(let i = offset; i <= endPoint; i++)  {
        let poke = await getThisPokemon(i)
        
        container.insertAdjacentHTML('beforeend', `
            <div id="${poke.id}-${poke.name}" class="poke-card">
                <div class="info-div">
                    <div class="name-div">
                        <span>#${poke.id.toString().length === 1 ? '00' + poke.id : poke.id.toString().length === 2 ? '0' + poke.id : poke.id}</span>
                        <h2>${poke.name.replace(`${poke.name[0]}`, `${poke.name[0].toUpperCase()}`)}</h2>
                        <div class="filters-div">
                            <svg width="25px" height="25px" viewBox="0 0 25 25">
                                <path class="star-yellow" style=" stroke:none;fill-rule:nonzero;fill:rgb(255, 255, 0);fill-opacity:0;" d="M 18.667969 14.917969 C 18.394531 15.175781 18.269531 15.5625 18.335938 15.925781 L 19.261719 21.050781 C 19.335938 21.488281 19.15625 21.925781 18.792969 22.175781 C 18.4375 22.4375 17.96875 22.46875 17.574219 22.261719 L 12.960938 19.855469 C 12.792969 19.769531 12.613281 19.71875 12.4375 19.71875 L 12.15625 19.71875 C 12.050781 19.726562 11.960938 19.769531 11.875 19.8125 L 7.261719 22.230469 C 7.03125 22.34375 6.769531 22.386719 6.519531 22.34375 C 5.894531 22.21875 5.492188 21.632812 5.59375 21.019531 L 6.519531 15.894531 C 6.582031 15.519531 6.457031 15.144531 6.1875 14.875 L 2.425781 11.230469 C 2.113281 10.917969 2 10.46875 2.148438 10.050781 C 2.28125 9.644531 2.636719 9.34375 3.074219 9.269531 L 8.25 8.519531 C 8.644531 8.476562 8.988281 8.238281 9.167969 7.886719 L 11.449219 3.207031 C 11.5 3.105469 11.574219 3.007812 11.65625 2.925781 L 11.75 2.855469 C 11.792969 2.800781 11.855469 2.761719 11.917969 2.71875 L 12.03125 2.675781 L 12.207031 2.605469 L 12.648438 2.605469 C 13.042969 2.644531 13.386719 2.882812 13.5625 3.226562 L 15.875 7.886719 C 16.042969 8.230469 16.363281 8.457031 16.738281 8.519531 L 21.917969 9.269531 C 22.355469 9.332031 22.71875 9.636719 22.863281 10.050781 C 23 10.46875 22.886719 10.925781 22.5625 11.230469 Z M 18.667969 14.917969 "/>
                                <path style=" stroke:none;fill-rule:nonzero;fill:black;fill-opacity:1;" d="M 23.074219 9.648438 L 16 8.726562 L 12.949219 2.273438 C 12.773438 1.898438 12.226562 1.898438 12.050781 2.273438 L 9 8.726562 L 1.925781 9.648438 C 1.5 9.699219 1.351562 10.199219 1.648438 10.5 L 6.824219 15.398438 L 5.523438 22.425781 C 5.449219 22.824219 5.875 23.148438 6.25 22.949219 L 12.5 19.550781 L 18.75 22.949219 C 19.125 23.148438 19.550781 22.824219 19.476562 22.425781 L 18.175781 15.398438 L 23.351562 10.5 C 23.648438 10.199219 23.476562 9.699219 23.074219 9.648438 Z M 17.273438 14.875 C 17.148438 15 17.101562 15.148438 17.125 15.324219 L 18.300781 21.574219 L 12.75 18.523438 C 12.675781 18.476562 12.601562 18.476562 12.5 18.476562 C 12.425781 18.476562 12.324219 18.5 12.25 18.523438 L 6.699219 21.574219 L 7.875 15.324219 C 7.898438 15.148438 7.851562 15 7.726562 14.875 L 3.101562 10.5 L 9.398438 9.675781 C 9.574219 9.648438 9.726562 9.550781 9.800781 9.398438 L 12.5 3.648438 L 15.226562 9.375 C 15.300781 9.523438 15.449219 9.625 15.601562 9.648438 L 21.898438 10.5 Z M 17.273438 14.875 "/>
                            </svg>
                            <div class="caugth-button"></div>
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

renderPokemon(151)