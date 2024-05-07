import dibujarPersona from "./dibujarPersona.js";


function redibujarFila(contexto, arrayFila) {
    arrayFila.forEach(element => {
        dibujarPersona(contexto, element.x, element.y, element.color)
    });
}
export default redibujarFila