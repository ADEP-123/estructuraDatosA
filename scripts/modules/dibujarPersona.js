function dibujarPersona(ctx, x, y, urlImagen) {
    let img = new Image()
    ctx.save();
    img.onload = function () {
        let altoimg = 25;
        let anchoimg = 30;
        switch (urlImagen) {
            case "hombre2.png":
                altoimg = 25;
                anchoimg = 25;
                break;
            case "mujer1.png":
                altoimg = 30;
                anchoimg = 30;
                break;
        }
        ctx.drawImage(img, x, y, anchoimg, altoimg)
    }
    img.src = `../../images/${urlImagen}`
    ctx.restore();
}
export default dibujarPersona