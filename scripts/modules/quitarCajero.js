import Variables from "../variables.js";
import agregarError from "./agregarError.js";
import redibujarUsoCajero from "./redibujarUsoCajero.js";

const variables = new Variables
export default function quitarCajero() {
    const primerCajeroLibre = document.querySelector(".cajeroLibre")
    //detectar si existe un cajero libre para poderlo quitar
    if (!primerCajeroLibre) {
        agregarError("Debe haber almenos un cajero libre para poderlo quitar")
        return
    }
    //Quitando el cajero
    variables.zonaCajas.removeChild(primerCajeroLibre);
    variables.quitarCajero();
    //Actualizando el select para completar transaccion 
    for (let i = 0; i < variables.complTransSelect.options.length; i++) {
        if (variables.complTransSelect.options[i].value == primerCajeroLibre.id) {
            variables.complTransSelect.removeChild(variables.complTransSelect.options[i])
        }
    }
    //Redibujando las duplas
    const duplasPersCajero = variables.persCajeros
    redibujarUsoCajero(duplasPersCajero)
}