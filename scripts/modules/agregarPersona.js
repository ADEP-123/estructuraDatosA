import Variables from "../variables.js";

const variables = new Variables
export default function agregarPersona(persona) {
    if (variables.cantCajeros == 0) {
        alert("Primero debe agregarse un cajero")
        return
    }
    const cajeroLibre = variables.zonaCajas.querySelector(".cajeroLibre");
    if (cajeroLibre) {
        const coordCajeroLibre = cajeroLibre.getBoundingClientRect();
        console.log(coordCajeroLibre);

        const imageUser = document.createElement("img");
        const widthCajero = document.querySelector(".cajeroImg").clientWidth
        imageUser.src = `../../images/${persona}`
        imageUser.width = widthCajero;
        imageUser.id = `pers${variables.cantPersonas}`;
        variables.zonaCola.appendChild(imageUser);

        const imageElement = variables.zonaCola.querySelector(`#pers${variables.cantPersonas}`)
        imageElement.style.position = "absolute";
        imageElement.style.top = `${coordCajeroLibre.top}px`;
        imageElement.style.left = `${coordCajeroLibre.left}px`;

        cajeroLibre.classList.remove("cajeroLibre")

        variables.setLastuser(persona)
        variables.agregarPersona();
    } else {
        alert("Ya no se pueden agregar mas personas a los cajeros")
        return
    }

}