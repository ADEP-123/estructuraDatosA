import Variables from "../variables.js";
import checkWidth from "./checkWidth.js";
import quitarUltimoCajero from "./quitarCajero.js";

const variables = new Variables

export default function agregarCajero() {

    const cantCajeros = variables.cantCajeros
    const image = document.createElement("img")
    image.id = `caj${cantCajeros}`;
    variables.agregarCajero()
    image.src = '../../images/cajero.png'
    image.className = "cajeroImg"
    variables.zonaCajas.insertAdjacentElement("beforeend", image)
    if (!checkWidth()) {
        alert("No se pueden agregar mas cajeros")
        quitarUltimoCajero()
    }
}