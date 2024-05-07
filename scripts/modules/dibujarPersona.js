function dibujarPersona(ctx, x, y, color) {
    // Dibujar cabeza
    ctx.beginPath();
    ctx.arc(x, y - 90, 5, 0, Math.PI * 2);
    ctx.fillStyle = color; // Color de la cabeza
    ctx.fill();

    // Dibujar cuerpo
    ctx.beginPath();
    ctx.translate(x, y - 110 + 35); // Movemos el origen al punto de inicio del cuerpo
    ctx.rotate(Math.PI); // Rotamos 180 grados
    ctx.moveTo(-10, -5);
    ctx.bezierCurveTo(-10, 15, 10, 15, 10, -5); // Ajustamos la curva para la nueva posición
    ctx.fillStyle = color; // Color del cuerpo
    ctx.fill();
}
export default dibujarPersona