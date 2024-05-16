import agregarCajero from "./modules/agregarCajero.js";
import agregarPersona from "./modules/agregarPersona.js";
import randomUser from "./modules/randomUser.js";
import Variables from "./variables.js";

//inicializar las variables
const variables = new Variables;

//Dibujar el cajero
variables.agregarCajeroButt.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    agregarCajero()
})

variables.agregarPersonaButt.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const user = randomUser()
    agregarPersona(user)
});

variables.completarTranscButt.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
})