export function initModal(listaPersonajes, callbackActualizar, callbackEliminar) { // <-- Línea modificada con los 3 parámetros
    const modalEditar = document.getElementById('modalEditar');
    const formEditar = document.getElementById('formEditar');
    const btnCerrarModal = document.getElementById('cerrarModal');
    const charactersContainer = document.getElementById('characters-container');

    const inputName = document.getElementById("edit_name");
    const inputStatus = document.getElementById("edit_status");
    const inputSpecies = document.getElementById("edit_species");
    const inputImage = document.getElementById("edit_image");

    let indiceActual = null; // <-- Variable para recordar a quién editamos

    if (!modalEditar || !charactersContainer || !formEditar) return;

    // 1. Escuchar los clics en las tarjetas (Delegación de eventos)
    charactersContainer.addEventListener('click', (e) => {
        const btnEditar = e.target.closest('.Editar');
        
        // Bloque de Editar
        if (btnEditar) {
            indiceActual = btnEditar.getAttribute('data-index');
            
            if (listaPersonajes && listaPersonajes[indiceActual]) {
                const personaje = listaPersonajes[indiceActual];
                inputName.value = personaje.name || '';
                inputStatus.value = personaje.status || '';
                inputSpecies.value = personaje.species || '';
                inputImage.value = personaje.image || '';
            }
            modalEditar.showModal();
        }

        // Bloque de Eliminar (Modificado línea por línea)
        const btnEliminar = e.target.closest('.Eliminar');
        if (btnEliminar) {
            const index = btnEliminar.getAttribute('data-index');
            
            const confirmar = confirm("¿Estás seguro de que deseas eliminar este personaje?");
            if (confirmar) {
                if (typeof callbackEliminar === 'function') {
                    callbackEliminar(index); // <-- Llama a la función de home.js
                }
            }
        }
    });

    // 2. Guardar datos editados (Submit)
    formEditar.addEventListener('submit', (e) => {
        e.preventDefault();

        const datosEditados = {
            name: inputName.value,
            status: inputStatus.value,
            species: inputSpecies.value,
            image: inputImage.value
        };

        if (typeof callbackActualizar === 'function') {
            callbackActualizar(indiceActual, datosEditados); // <-- Llama a la función de home.js
        }

        formEditar.reset();
        modalEditar.close();
    });

    // 3. Botón Cancelar/Cerrar
    if (btnCerrarModal) {
        btnCerrarModal.addEventListener('click', (e) => {
            e.preventDefault();
            formEditar.reset();
            modalEditar.close();
        });
    }
}