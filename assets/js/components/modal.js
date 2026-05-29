export function initModal() {
    const modalEditar = document.getElementById('modalEditar');
    const btnCerrarModal = document.getElementById('cerrarModal');
    const charactersContainer = document.getElementById('characters-container'); // El contenedor de tus tarjetas

    if (!modalEditar || !charactersContainer) return;

    // 1. Escuchar los clics en las tarjetas (Delegación de eventos)
    charactersContainer.addEventListener('click', (e) => {
        // Buscamos si el clic fue en el botón Editar usando su clase para evitar problemas de IDs duplicados
        const btnEditar = e.target.closest('.Editar');
        
        if (btnEditar) {
            const index = btnEditar.getAttribute('data-index');
            console.log("Abriendo modal para el personaje con índice:", index);
            
            // Abrimos el modal de forma nativa
            modalEditar.showModal();
        }
        function ediatr(editar_personaje,index) {
            
        }
        // De paso, dejamos listo el botón Eliminar por si su clase es 'Eliminar'
        const btnEliminar = e.target.closest('.Eliminar');
        if (btnEliminar) {
            const index = btnEliminar.getAttribute('data-index');
            console.log("Eliminar personaje con índice:", index);
        }
    });

    // 2. Escuchar el clic para cerrar el modal
    if (btnCerrarModal) {
        btnCerrarModal.addEventListener('click', (e) => {
            e.preventDefault(); // Evita comportamientos extraños si está dentro del form
            modalEditar.close();
        });
    }
}