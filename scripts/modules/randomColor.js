import Variables from "../variables.js";

const variables = new Variables;
function randomColor() {
    const color = ["blue", "green", "pink", "red", "purple"]
    let randomNum = Math.trunc(Math.random() * color.length);
    while (color[randomNum] == variables.lastColor) {
        randomNum = Math.trunc(Math.random() * (color.length - 0) + 0);
    }
    variables.setLastColor(color[randomNum])
    return color[randomNum]
}
export default randomColor