function dibujarPersona(ctx, x, y, color) {
    // Dibujar cabeza
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = color; // Color de la cabeza
    ctx.fill();

    // Dibujar cuerpo
    ctx.beginPath();
    ctx.translate(x, y + 30); // Movemos el origen al punto de inicio del cuerpo
    ctx.rotate(Math.PI); // Rotamos 180 grados
    ctx.moveTo(-20, -10);
    ctx.bezierCurveTo(-20, 30, 20, 30, 20, -10); // Ajustamos la curva para la nueva posición
    ctx.fillStyle = color; // Color del cuerpo
    ctx.fill();
}
export default dibujarPersona