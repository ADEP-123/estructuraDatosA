import dibujarCajero from "./modules/dibujarCajero.js";
import dibujarPersona from "./modules/dibujarPersona.js";
import randomColor from "./modules/randomColor.js";
import Variables from "./variables.js";

//inicializar las variables
const variables = new Variables;

//Dibujar el cajero
dibujarCajero(variables.contexto, variables.canvas.width)

agregarPersonaBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    const color = randomColor()
    dibujarPersona(variables.contexto, variables.canvas.width / 2, (variables.canvas.height - 40 + (variables.cantPersonas * 5)), color);
    variables.aumentarPersona();
});
const color = randomColor()
dibujarPersona(variables.contexto, variables.canvas.width / 2, (variables.canvas.height - 40 - (variables.cantPersonas * 5)), color);
