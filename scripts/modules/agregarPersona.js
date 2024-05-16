import Variables from "../variables.js";

const variables = new Variables
export default function agregarPersona(persona) {
    if (variables.cantCajeros == 0) {
        alert("Primero debe agregarse un cajero")
        return
    }
    //Obtener el primer cajero disponible
    const cajeroLibre = variables.zonaCajas.querySelector(".cajeroLibre");

    //setear las propiedades de la imagen para insertarla a la cola
    const imageUser = document.createElement("img");
    const widthCajero = document.querySelector(".cajeroImg").clientWidth
    imageUser.src = `../../images/${persona}`
    imageUser.width = widthCajero;
    imageUser.id = `pers${variables.cantPersonas}`;
    variables.zonaCola.appendChild(imageUser);
    const imageElement = variables.zonaCola.querySelector(`#pers${variables.cantPersonas}`)
    imageElement.style.position = "absolute";
    //Determinar si un cajero esta disponible
    if (cajeroLibre) {
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
    } else {
        //obtener la coordenada top de un cajero
        const topCoordCaj = parseInt(variables.persCajeros[0].coord.top)

        //obtener el array de personas en espera anterior
        const arrPersEnEspAnterior = variables.arrPersonasEnEsp
        imageElement.style.top = `${(variables.cantPersonas - variables.cantCajeros + 1) * 60 + (topCoordCaj * 1.5)}px`
        imageElement.style.left = `46%`
        arrPersEnEspAnterior.push(imageElement)
        variables.setNewArrPersEnEsp(arrPersEnEspAnterior)
    }
    variables.setLastuser(persona)
    variables.agregarPersona();

}