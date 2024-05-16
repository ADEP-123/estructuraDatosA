import Variables from "../variables.js";

const variables = new Variables

export default function agregarCajero() {
    const cantCajeros = variables.cantCajeros
    const image = document.createElement("img")
    image.id = `caj${cantCajeros}`;
    variables.agregarCajero()
    image.src = '../../images/cajero.png'
    image.className = "cajeroImg"
    variables.zonaCajas.insertAdjacentElement("beforeend", image)
}