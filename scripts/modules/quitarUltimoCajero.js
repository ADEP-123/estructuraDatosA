import Variables from "../variables.js";

const variables = new Variables

export default function quitarUltimoCajero() {
    const cajeros = variables.zonaCajas.children
    variables.zonaCajas.removeChild(cajeros[cajeros.length - 1])
    variables.quitarCajero()
}