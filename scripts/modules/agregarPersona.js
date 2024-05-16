import Variables from "../variables.js";
import dibujarPersonaEnCajeroLibre from "./dibujarPersonaEnCajeroLibre.js";

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
    imageUser.id = `pers${variables.lastIdPersona}`;

    //detectar si la persona se sale de la zona de juego
    if (variables.arrPersonasEnEsp.length > 0) {
        const heightZonaEspera = variables.zonaCola.clientHeight
        const lastUserHeigth = variables.arrPersonasEnEsp[0].clientHeight
        if (((lastUserHeigth * 0.5) * variables.arrPersonasEnEsp.length) > heightZonaEspera) {
            alert("no puede haber mas personas en la fila de espera")
            return
        }
    }

    variables.zonaCola.appendChild(imageUser);
    const imageElement = variables.zonaCola.querySelector(`#pers${variables.lastIdPersona}`)
    imageElement.style.position = "absolute";
    //Determinar si un cajero esta disponible
    if (cajeroLibre) {
        //funcion para dibujar una persona en un cajero
        dibujarPersonaEnCajeroLibre(cajeroLibre, imageElement)
    } else {
        //obtener la coordenada top de un cajero
        const topCoordCaj = parseInt(variables.persCajeros[0].coord.top)

        //obtener el array de personas en espera anterior
        const arrPersEnEspAnterior = variables.arrPersonasEnEsp
        imageElement.style.top = `${(variables.cantPersonas - variables.cantCajeros + 1) * 60 + (topCoordCaj * 1.5)}px`
        console.log(imageElement.style.top);
        imageElement.style.left = `46%`
        imageElement.classList.add("personaEnEspera")
        arrPersEnEspAnterior.push(imageElement)
        variables.setNewArrPersEnEsp(arrPersEnEspAnterior)
    }
    variables.setLastuser(persona)
    variables.agregarPersona();
}