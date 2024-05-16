import Variables from "../variables.js";
import redibujarUsoCajero from "./redibujarUsoCajero.js";

const variables = new Variables

export default function agregarCajero() {
    const cantCajeros = variables.cantCajeros
    const image = document.createElement("img")
    image.id = `caj${cantCajeros}`;
    image.src = '../../images/cajero.png'
    image.className = "cajeroImg"
    variables.zonaCajas.insertAdjacentElement("beforeend", image)
    const newDuplas = redibujarUsoCajero(variables.persCajeros)
    variables.setNewPersCajero(newDuplas)
    variables.agregarCajero()
    image.classList.add("cajeroLibre")
}