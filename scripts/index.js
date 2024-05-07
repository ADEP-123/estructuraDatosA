import dibujarCajero from "./modules/dibujarCajero.js";
import dibujarPersona from "./modules/dibujarPersona.js";
import Variables from "./variables.js";

//inicializar las variables
const variables = new Variables;

//Dibujar el cajero
dibujarCajero(variables.contexto, variables.canvas.width)

// Llamamos a la función para dibujar una persona centrada en la parte inferior
dibujarPersona(variables.contexto, variables.canvas.width / 2, variables.canvas.height - 40, "blue");

