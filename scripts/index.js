import agregarCajero from "./modules/agregarCajero.js";
import agregarPersona from "./modules/agregarPersona.js";
import checkWidth from "./modules/checkWidth.js";
import completarTransaccion from "./modules/completarTransaccion.js";
import dibujarPersonaEnCajeroLibre from "./modules/dibujarPersonaEnCajeroLibre.js";
import quitarCajero from "./modules/quitarCajero.js";
import randomUser from "./modules/randomUser.js";
import redibujarFilaEspera from "./modules/redibujarFilaEspera.js";
import Variables from "./variables.js";

//inicializar las variables
const variables = new Variables;

//Listener para detectar cuando dibujar el cajero
variables.agregarCajeroButt.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    if (variables.cantCajeros == 0) {
        agregarCajero()
    } else {
        //detectar si al agregar el cajero se sale de la zona de juego
        if (!checkWidth()) {
            alert("No se pueden agregar mas cajeros")
        } else {
            //agregar cajero
            agregarCajero()
            //detectar si hay personas en espera y si es asi pasar la primera persona en espera al cajero nuevo disponible
            if (variables.arrPersonasEnEsp.length != 0) {
               redibujarFilaEspera()
            }
        }
    }

})

//Listener para detectar cuando insertar una nueva persona
variables.agregarPersonaButt.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const user = randomUser()
    agregarPersona(user)
});

//Listener para detectar cuando quitar un cajero
variables.quitarCajeroButt.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    quitarCajero();
});

//Listener para detectar cuando completar una transaccion
variables.completarTranscButt.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    if (variables.persCajeros.length == 0) {
        alert("Debe haber almenos una persona en un cajero")
    }
    completarTransaccion()
})