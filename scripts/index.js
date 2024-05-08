import clearCanvas from "./modules/clearCanvas.js";
import dibujarPersona from "./modules/dibujarPersona.js";
import randomUser from "./modules/randomUser.js";
import redibujarFila from "./modules/redibujar.js";
import Variables from "./variables.js";

//inicializar las variables
const variables = new Variables;

//Dibujar el cajero
clearCanvas(variables.contexto, variables.canvas.width, variables.canvas.height)
variables.agregarPersonaButt.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const color = randomUser()
    const x = variables.canvas.width / 2 - 15;
    const y = variables.canvas.height - 140 + (variables.cantPersonas * 10)
    variables.agregarPersonaEsp(x, y, color)
    dibujarPersona(variables.contexto, x, y, color);
    variables.aumentarPersona();
});

variables.completarTranscButt.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    if (variables.arrPersonasEnEsp.length == 0) {
        alert("No hay personas usando el cajero")
    } else {
        variables.quitarPersonaEsp();
        clearCanvas(variables.contexto, variables.canvas.width, variables.canvas.height)
        redibujarFila(variables.contexto, variables.arrPersonasEnEsp)
    }
})