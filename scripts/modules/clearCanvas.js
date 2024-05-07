import dibujarCajero from "./dibujarCajero.js";

function clearCanvas(contexto, ancho, alto) {
    contexto.clearRect(0, 0, ancho, alto);
    dibujarCajero(contexto, ancho)
}
export default clearCanvas