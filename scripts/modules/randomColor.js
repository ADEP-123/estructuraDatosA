function randomColor() {
    const color = ["blue", "green", "pink", "red"]
    const randomNum = Math.trunc(Math.random() * (color.length - 0) + 0);
    console.log(randomNum);
    return color[randomNum]
}
export default randomColor