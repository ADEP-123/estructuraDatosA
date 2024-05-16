import Variables from "../variables.js";

const variables = new Variables
export default function checkWidth() {
    let isCorrect = true;
    const widthZonaCajas = variables.zonaCajas.clientWidth
    const cajeroWidth = document.querySelector(".cajeroImg").clientWidth
    if (variables.maxWidthGame <= (widthZonaCajas + cajeroWidth)) {
        isCorrect = false
    }
    return isCorrect
}