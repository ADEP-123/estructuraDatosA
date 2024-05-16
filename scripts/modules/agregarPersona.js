import Variables from "../variables.js";

const variables = new Variables
export default function agregarPersona(persona) {
    if (variables.cantCajeros == 0) {
        alert("Primero debe agregarse un cajero")
        return
    }
    //Obtener el primer cajero disponible
    const cajeroLibre = variables.zonaCajas.querySelector(".cajeroLibre");
    if (cajeroLibre) {
        //obtener las coordenadas del cajero
        const coordCajeroLibre = cajeroLibre.getBoundingClientRect();

        //setear las propiedades de la imagen para insertarla a la cola, en este caso sobre el primer cajero libre
        const imageUser = document.createElement("img");
        const widthCajero = document.querySelector(".cajeroImg").clientWidth
        imageUser.src = `../../images/${persona}`
        imageUser.width = widthCajero;
        imageUser.id = `pers${variables.cantPersonas}`;
        variables.zonaCola.appendChild(imageUser);

        const imageElement = variables.zonaCola.querySelector(`#pers${variables.cantPersonas}`)
        imageElement.style.position = "absolute";
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

        variables.setLastuser(persona)
        variables.agregarPersona();
    } else {
        alert("Ya no se pueden agregar mas personas a los cajeros")
        return
    }

}