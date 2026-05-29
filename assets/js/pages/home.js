import { loadHTML } from '../utils/helpers.js';
import { getCharacters } from '../services/api.js';
import { characterCard } from '../components/characterCard.js';
import {dialog} from "./dialog.js";

/**
 * Renderiza Home
 */
export async function renderHome() {

    const content = document.getElementById('content');

    content.innerHTML = await loadHTML(
        './assets/js/views/home.html'
    );

    const container =
        document.getElementById('characters-container');

    // API
    const characters = await getCharacters();

    // LOCAL STORAGE
    const personajesLocal =
        JSON.parse(localStorage.getItem("personajes")) || [];

    // unir ambos
    const todosLosPersonajes = [
        ...characters,
        ...personajesLocal
    ];

    container.innerHTML = todosLosPersonajes
    .map((character, index) =>
        characterCard(character, index)
    )
    .join('');
}
