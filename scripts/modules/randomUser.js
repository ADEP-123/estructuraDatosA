import Variables from "../variables.js";

const variables = new Variables;
function randomUser() {
    const color = ["hombre1.png", "hombre2.png","mujer1.png"]
    let randomNum = Math.trunc(Math.random() * color.length);
    while (color[randomNum] == variables.lastColor) {
        randomNum = Math.trunc(Math.random() * (color.length - 0) + 0);
    }
    variables.setLastColor(color[randomNum])
    return color[randomNum]
}
export default randomUser