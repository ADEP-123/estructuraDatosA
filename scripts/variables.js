class Variables {
    constructor() {
        if (!Variables.instance) {
            this.canvas = document.getElementById('colaCanvas');
            this.contexto = this.canvas.getContext('2d');
            this.agregarPersonaButt = document.getElementById('agregarPersonaBtn');
            this.completarTranscButt = document.getElementById('eliminarPersonaBtn');
            this.cantPersonas = 0;
            this.lastColor = "";
            this.arrPersonasEnEsp = [];
            this.personaPos = 0;
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

    setLastColor(color) {
        this.lastColor = color
    }

    agregarPersonaEsp(x, y, color) {
        this.arrPersonasEnEsp.push({ pos: this.personaPos, x, y, color })
        this.personaPos++;
    }

    quitarPersonaEsp() {
        for (let i = this.arrPersonasEnEsp.length - 1; i > 0; i--) {
            this.arrPersonasEnEsp[i].x = this.arrPersonasEnEsp[i - 1].x
            this.arrPersonasEnEsp[i].y = this.arrPersonasEnEsp[i - 1].y
        }
        this.arrPersonasEnEsp.shift()
        this.cantPersonas = this.arrPersonasEnEsp.length
    }
}
export default Variables