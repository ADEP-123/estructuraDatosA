import Variables from "../variables.js";

const variables = new Variables
export default function dibujarPersonaEnCajeroLibre(cajero, persona) {
    const cajeroLibre = cajero;
    const imageElement = persona;
    //obtener las coordenadas del cajero
    const coordCajeroLibre = cajeroLibre.getBoundingClientRect();

    //Setear las coordenadas de la persona en el cajero desponible
    imageElement.style.top = `${coordCajeroLibre.top}px`;
    imageElement.style.left = `${coordCajeroLibre.left}px`;
    imageElement.classList.add("personaEnCajero")

    //quitar el estado libre al cajero
    cajeroLibre.classList.remove("cajeroLibre")

    //Crear la dupla de la persona con el cajero y las coordenadas
    const listaDuplasAnterior = variables.persCajeros

    const dupla = { cajero: cajeroLibre.id, persona: imageElement.id, coord: { top: `${coordCajeroLibre.top}px`, left: `${coordCajeroLibre.left}px` } }
    listaDuplasAnterior.push(dupla)
    variables.setNewPersCajero(listaDuplasAnterior);
}