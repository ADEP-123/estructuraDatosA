import agregarCajero from "./modules/agregarCajero.js";
import agregarPersona from "./modules/agregarPersona.js";
import checkWidth from "./modules/checkWidth.js";
import dibujarPersonaEnCajeroLibre from "./modules/dibujarPersonaEnCajeroLibre.js";
import quitarCajero from "./modules/quitarCajero.js";
import randomUser from "./modules/randomUser.js";
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
                const cajeroLibre = document.querySelector(".cajeroLibre")
                const user = variables.arrPersonasEnEsp[0]
                if (variables.arrPersonasEnEsp.length > 1) {
                    for (let i = variables.arrPersonasEnEsp.length - 1; i > 0; i--) {
                        variables.arrPersonasEnEsp[i].style.top = variables.arrPersonasEnEsp[i - 1].style.top
                    }
                }
                dibujarPersonaEnCajeroLibre(cajeroLibre, user)
                user.classList.remove("personaEnEspera");
                const newPersonasEnEsp = variables.arrPersonasEnEsp.slice(1);
                variables.setNewArrPersEnEsp(newPersonasEnEsp)
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

variables.completarTranscButt.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();

})