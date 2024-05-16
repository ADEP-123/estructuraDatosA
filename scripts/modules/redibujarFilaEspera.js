import Variables from "../variables.js";
import dibujarPersonaEnCajeroLibre from "./dibujarPersonaEnCajeroLibre.js";

const variables = new Variables
export default function redibujarFilaEspera() {
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