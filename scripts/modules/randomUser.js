import Variables from "../variables.js";

const variables = new Variables;
function randomUser() {
    const user = ["hombre1.png", "hombre2.png", "hombre3.png", "hombre4.png","mujer1.png", "mujer2.png", "abuelo1.png" ]
    let randomNum = Math.trunc(Math.random() * user.length);
    while (user[randomNum] == variables.lastUser) {
        randomNum = Math.trunc(Math.random() * (user.length - 0) + 0);
    }
    return user[randomNum]
}
export default randomUser