import { loadHTML } from '../utils/helpers.js';
import { getCharacters } from '../services/api.js';
import { characterCard } from '../components/characterCard.js';
import { initModal } from '../components/modal.js';
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


    // 3. FUNCIÓN RE-RENDERIZAR: Se encargará de pintar la interfaz cada vez que muten los datos
    function renderizarTarjetas() {
        container.innerHTML = todosLosPersonajes
            .map((character, index) => characterCard(character, index))
            .join('');
    }

    // 4. CALLBACK ACTUALIZAR: La función mágica que le enviaremos al Modal
    function callbackActualizar(index, datosEditados) {
        // Actualizamos el personaje específico en nuestro array global
        todosLosPersonajes[index] = datosEditados;

        // Guardamos la lista actualizada completa en el LocalStorage
        localStorage.setItem("personajes", JSON.stringify(todosLosPersonajes));

        // Volvemos a pintar las tarjetas instantáneamente en la interfaz
        renderizarTarjetas();
    }
    function callbackEliminar(index) {
        todosLosPersonajes.splice(index, 1); // Remueve el personaje del array
        localStorage.setItem("personajes", JSON.stringify(todosLosPersonajes)); // Guarda en LocalStorage
        renderizarTarjetas(); // Vuelve a pintar las tarjetas en la pantalla
    }
    // 5. INICIALIZACIÓN
    // Pintamos las tarjetas por primera vez al cargar la vista
    renderizarTarjetas();

    // Inicializamos el modal pasándole la lista actual y la función de actualización
    initModal(todosLosPersonajes, callbackActualizar);
    container.innerHTML = todosLosPersonajes
    .map((character, index) =>
        characterCard(character, index)
    )
    .join('');


    // Al final de tu renderHome() en home.js:
initModal(todosLosPersonajes, callbackActualizar, callbackEliminar); // <-- ¡Revisa que 'callbackEliminar' esté escrito ahí!
}
