import { getThisPokemon } from "./request.js";

async function renderPokemon(endPoint, offset = 1)  {
    const container = document.querySelector('main')

    for(let i = offset; i < endPoint; i++)  {
        let poke = await getThisPokemon(i)

        console.log(poke)
        
        container.insertAdjacentHTML('beforeend', `
            <div class="poke-card">
                <div class="info-div">
                    <div class="name-div">
                        <span>#${poke.id}</span>
                        <h2>${poke.name}</h2>
                        <div class="filters-div">
                                <img class="star-svg" src="./src/assets/star.svg" alt="">
                                <img class="circle-svg" src="./src/assets/circle.svg" alt="">
                        </div>
                    </div>
                    <div class="types-div">
                        <span>Type 1</span>
                        <span>Type 2</span>
                    </div>
                </div>
                <div class="sprite-div">
                    <img src="${poke.sprites.front_default}">
                </div>
            </div>
        `)
    }

}



function getAverageRGB(imgPath) {

    const img = new Image();
    img.src = imgPath;

    img.onload = function() {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let r = 0, g = 0, b = 0;

        for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
        }

        const pixels = data.length / 4;
        const avgR = Math.round(r / pixels);
        const avgG = Math.round(g / pixels);
        const avgB = Math.round(b / pixels);

        return `rgb(${avgR}, ${avgG}, ${avgB})`;
    };
}

renderPokemon(151)