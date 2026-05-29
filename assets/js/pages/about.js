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
    const enviarDatos = document.getElementById("Enviar_datos");
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
        const statusPersonaje =
            document.getElementById("status_personaje").value
        const speciesPersonaje = 
            document.getElementById("species_personaje").value
        if (
            namePersonaje.trim() !== "" &&
            episodePersonaje.trim() !== "" &&
            generoPersonaje.trim() !== "" &&
            urlPersonaje.trim() !== "" &&
            statusPersonaje.trim() !== "" &&
            speciesPersonaje.trim() !== ""
        ){

            const personajeFormulario = {
                name: namePersonaje,
                episode: episodePersonaje,
                gender: generoPersonaje,
                image: urlPersonaje,
                status: statusPersonaje,
                species: speciesPersonaje
            };

            const personajesGuardados =
                JSON.parse(localStorage.getItem("personajes")) || [];

            personajesGuardados.push(personajeFormulario);

            localStorage.setItem(
                "personajes",
                JSON.stringify(personajesGuardados)
            );

            alert("Datos enviados");

        } else {
            alert("Todos los campos son obligatorios");
        }

    });

}