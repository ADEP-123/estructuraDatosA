import Variables from "../variables.js";
import redibujarUsoCajero from "./redibujarUsoCajero.js";

const variables = new Variables
export default function quitarCajero() {
    const primerCajeroLibre = document.querySelector(".cajeroLibre")
    //detectar si existe un cajero libre para poderlo quitar
    if (!primerCajeroLibre) {
        alert("Debe haber almenos un cajero libre para poderlo quitar")
        return
    }
    //Quitando el cajero
    variables.zonaCajas.removeChild(primerCajeroLibre);
    //Redibujando las duplas
    const duplasPersCajero = variables.persCajeros
    redibujarUsoCajero(duplasPersCajero)
}