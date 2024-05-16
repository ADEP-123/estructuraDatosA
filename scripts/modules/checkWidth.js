import Variables from "../variables.js";

const variables = new Variables
export default function checkWidth() {
    let isCorrect = true;
    const widthZonaCajas = variables.zonaCajas.clientWidth
    if (variables.maxWidthGame <= widthZonaCajas) {
        isCorrect = false
    }
    return isCorrect
}