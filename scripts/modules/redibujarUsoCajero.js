export default function redibujarUsoCajero(duplas) {
    const cajeros = document.querySelectorAll(".cajeroImg")
    const personas = document.querySelectorAll(".personaEnCajero")
    if (duplas.length == 0) {
        return duplas
    }

    for (let i = 0; i < duplas.length; i++) {
        //for para recorrer todos los cajeros y comprar su existencia en la dupla para corregir las nuevas coordenadas
        for (let j = 0; j < cajeros.length; j++) {
            if (duplas[i].cajero == cajeros[j].id) {
                const coord = cajeros[j].getBoundingClientRect();
                duplas[i].coord.top = `${coord.top}px`
                duplas[i].coord.left = `${coord.left}px`
            }
        }
        //for para corregir las coordenadas de las personas
        for (let k = 0; k < personas.length; k++) {
            if (duplas[i].persona == personas[k].id) {
                personas[k].style.top = duplas[i].coord.top;
                personas[k].style.left = duplas[i].coord.left;
            }
        }
    }

    return duplas
}