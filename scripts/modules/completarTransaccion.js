import Variables from "../variables.js"
import agregarError from "./agregarError.js"
import redibujarFilaEspera from "./redibujarFilaEspera.js"
import redibujarUsoCajero from "./redibujarUsoCajero.js"

const variables = new Variables

export default function completarTransaccion() {
    const cajeroACompletar = variables.complTransSelect.value
    if (cajeroACompletar == 0) {
        agregarError("Por favor seleccione uno de los cajeros")
        return
    }

    //Buscando la tupla correspondiente
    const duplas = variables.persCajeros
    for (let i = 0; i < duplas.length; i++) {
        if (duplas[i].cajero === cajeroACompletar) {
            //Una vez encontrada la tupla eliminar la imagen
            const imgPersona = variables.zonaCola.querySelector(`#${duplas[i].persona}`)

            variables.zonaCola.removeChild(imgPersona);
            //Cambiar el estado de el cajero
            const htmlCajero = variables.zonaCajas.querySelector(`#${duplas[i].cajero}`)
            htmlCajero.classList.add("cajeroLibre")
            //Eliminar la tupla 
            duplas.splice(i, 1);
            //Redibujar duplas
            const nuevaListaTuplas = redibujarUsoCajero(duplas)
            variables.setNewPersCajero(nuevaListaTuplas)

        }
    }
    //detectar si hay personas en espera y si es asi pasar la primera persona en espera al cajero nuevo disponible
    if (variables.arrPersonasEnEsp.length != 0) {
        redibujarFilaEspera()
        console.log(variables.cantPersonas);
        variables.quitarPersona()
        console.log(variables.cantPersonas);
    }

}