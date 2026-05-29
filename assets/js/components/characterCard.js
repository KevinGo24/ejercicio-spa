/**
 * Character Card Component
 */

export function characterCard(character,index) {

    return `
        <article class="card">
            <img
                src="${character.image}"
                alt="${character.name}"
            >

            <div class="card-body">
                <h3>${character.name}</h3>
                <p>
                    <strong>Status:</strong>
                    ${character.status}
                </p>
                <p>
                    <strong>Species:</strong>
                    ${character.species}
                </p>
                <div class="card_button">
                <button id="editar_personaje" class="Editar" data-index="${index}"> Editar</button>
                <button id="eliminar_persobnaje" class="Eliminar" data-index="${index}"> Elimianar</button>
                </div>
            </div>
        </article>
    `;
}
