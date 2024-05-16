function dibujarCajero(ctx, ancho) {
    let img = new Image()
    img.onload = function () {
        ctx.drawImage(img, ancho / 2 - 20, 0, 40, 25)
    }
    img.src = '../../images/cajero.png'
}
export default dibujarCajero