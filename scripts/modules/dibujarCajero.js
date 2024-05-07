function dibujarCajero(ctx, ancho) {
    // Dibujar cajero (rectángulo principal)
    ctx.beginPath();
    ctx.rect(ancho / 2 - 40, 0, 80, 50);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();

    // Dibujar pantalla del cajero
    ctx.beginPath();
    ctx.rect(ancho / 2 - 30, 5, 60, 15);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();

    // Dibujar panel del cajero
    ctx.beginPath();
    ctx.rect(ancho / 2 - 32, 25, 65, 10);
    ctx.fillStyle = "darkgray";
    ctx.fill();
    ctx.closePath();
}
export default dibujarCajero