import Variables from "../variables.js";
import redibujarUsoCajero from "./redibujarUsoCajero.js";

const variables = new Variables

export default function agregarCajero() {
    const image = document.createElement("img")
    // image.id = `caj${cantCajeros}`;
    image.id = `caj${variables.lastIdCajero}`;
    image.src = '/images/cajero.png'
    image.className = "cajeroImg"
    variables.zonaCajas.insertAdjacentElement("beforeend", image)
    const newDuplas = redibujarUsoCajero(variables.persCajeros)
    variables.setNewPersCajero(newDuplas)

    //Actualizando el select para completar transaccion
    variables.agregarCajero()
    let opciones = ";"
    for (let i = 0; i < variables.zonaCajas.children.length; i++) {
        const cajero = variables.zonaCajas.children[i]
        opciones +=/*html*/`<option value="${cajero.id}">Caj ${i}</option >`
    }
    variables.complTransSelect.innerHTML = /*html*/`<option value="0" default>Cajero:</option>` + opciones;
    image.classList.add("cajeroLibre")
}