import { loadHTML } from '../utils/helpers.js';

/**
 * Renderiza About
 */
export async function renderAbout() {

    const content = document.getElementById('content');

    content.innerHTML = await loadHTML(
        './assets/js/views/about.html'
    );

    // AHORA el botón ya existe
    const enviarDatos =
        document.getElementById("Enviar_datos");

    enviarDatos.addEventListener("click", function (e) {

        e.preventDefault();

        const namePersonaje =
            document.getElementById("name_personaje").value;
        const episodePersonaje = 
            document.getElementById("episode_number").value
        const generoPersonaje = 
            document.getElementById("genero_personaje").value
        const urlPersonaje =
            document.getElementById("Url_picture").value


        const personajeFormulario = {

            namePersonaje,
            episodePersonaje,
            generoPersonaje,
            urlPersonaje

        };
        console.log(personajeFormulario)
        localStorage.setItem(
            "personaje_ficticio",
            JSON.stringify(personajeFormulario)
        );
    });

}