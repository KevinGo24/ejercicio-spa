export function dialog() {

    const modal =
        document.getElementById("modalEditar");

    let personajeIndex = null;

    document.addEventListener("click", (e) => {

        if (e.target.classList.contains("Editar")) {

            personajeIndex =
                e.target.dataset.index;

            const personajes =
                JSON.parse(localStorage.getItem("personajes")) || [];

            const personaje =
                personajes[personajeIndex];

            document.getElementById("edit_name").value =
                personaje.name;

            document.getElementById("edit_status").value =
                personaje.status;

            document.getElementById("edit_species").value =
                personaje.species;

            document.getElementById("edit_image").value =
                personaje.image;

            modal.showModal();
        }
    });

}