class Variables {
    constructor() {
        if (!Variables.instance) {
            this.canvas = document.getElementById('colaCanvas');
            this.contexto = this.canvas.getContext('2d');
            this.agregarPersonaButt = document.getElementById('agregarPersonaBtn');
            this.cantPersonas = 0;
            Variables.instance = this;
        }
        return Variables.instance
    }

    aumentarPersona() {
        this.cantPersonas++;
    }

    disminuirPersona() {
        this.cantPersonas--;
    }
}
export default Variables