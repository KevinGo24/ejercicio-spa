import { loadHTML } from '../utils/helpers.js';

/**
 * Renderiza About
 */
export async function renderAbout() {
    const content = document.getElementById('content');
    content.innerHTML = await loadHTML(
        './assets/js/views/about.html'
    );
}


// ----- Capturamos el DOM -----
// 1-> capturamos el nombre del perosnaje
const namePersonaje = document.getElementById("name_personaje")
// 2-> capturamos el episodio fisticio del personaje agregado
const episodePersonaje = document.getElementById("episode_number")
// 3-> capturamos el genero del personaje agregado
const generoPersonaje = document.getElementById("genero_personaje")
// 4-> capturamos la url de la imagen a agg
const urlPicutre = document.getElementById("Url_picture")
// 5-> capturamos el vento del boton
const enviarDatos = document.getElementById("Enviar_datos")
enviarDatos.addEventListener("click",renderAbout)

// creo una constante para capturar los datos del formulario
const perosnaje_formulario = {
    namee,
    episode,
    genero,
    url,
    enviar
}

// guardar datos en localstroge
localStorage.setItem('perosnaje_fisticio', JSON.stringify(perosnaje_formulario))