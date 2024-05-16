import Variables from "../variables.js"
import dibujarPersonaEnCajeroLibre from "./dibujarPersonaEnCajeroLibre.js"
import redibujarUsoCajero from "./redibujarUsoCajero.js"

const variables = new Variables

export default function completarTransaccion() {
    const cajeroACompletar = variables.complTransSelect.value
    if (cajeroACompletar == 0) {
        alert("Por favor seleccione uno de los cajeros")
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
    console.log(duplas);
    if (variables.arrPersonasEnEsp.length > 0) {
        const cajeroLibre = document.querySelector(".cajeroLibre")
        const user = variables.arrPersonasEnEsp[0]
        //Dibujando la primera persona en espera en el cajero libre
        dibujarPersonaEnCajeroLibre(cajeroLibre, user)
        user.classList.remove("personaEnEspera");
        const newPersonasEnEsp = variables.arrPersonasEnEsp.slice(1);
        variables.setNewArrPersEnEsp(newPersonasEnEsp)
    }

}