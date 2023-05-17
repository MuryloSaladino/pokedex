import { filterCaugth, filterFavorites, filterPokemon, renderPokemon } from "./render.js";

function hoverFilters() {
    const starsNL = document.querySelectorAll('.star');
    const stars = Array.prototype.slice.call(starsNL)

    stars.forEach(element => {
        element.addEventListener('mouseenter', () => element.classList.toggle('fa-solid'))
        element.addEventListener('mouseout', () => element.classList.toggle('fa-solid'))
        element.addEventListener('click', () => element.classList.toggle('fa-solid'))
    });
}

await renderPokemon(151)
filterPokemon()
filterCaugth()
filterFavorites()
hoverFilters()