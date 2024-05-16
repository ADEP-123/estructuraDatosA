import Variables from "../variables.js";

const variables = new Variables
export default function agregarPersona(persona) {
    if (variables.cantCajeros == 0) {
        alert("Primero debe agregarse un cajero")
        return
    }
    if (variables.cantCajeros == variables.cantPersonas) {
        alert("Ya no se pueden agregar mas personas a los cajeros")
        return
    }
    const widthCajero = document.querySelector(".cajeroImg").clientWidth
    console.log(widthCajero);
    const imageUser = document.createElement("img");
    imageUser.src = `../../images/${persona}`
    imageUser.width = widthCajero;
    variables.zonaPersonasEnCajero.insertAdjacentElement("beforeend", imageUser)
    variables.setLastuser(persona)
    variables.agregarPersona();
}