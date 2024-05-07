function dibujarCajero(ctx, ancho) {
    // Dibujar cajero (rectángulo principal)
    ctx.beginPath();
    ctx.rect(ancho / 2 - 20, 0, 40, 30);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();

    // Dibujar pantalla del cajero
    ctx.beginPath();
    ctx.rect(ancho / 2 - 15, 2, 30, 10);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    // Dibujar panel del cajero
    ctx.beginPath();
    ctx.rect(ancho / 2 - 16, 15, 32, 5);
    ctx.fillStyle = "darkgray";
    ctx.fill();
    ctx.closePath();
}
export default dibujarCajero