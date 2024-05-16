class Variables {
    constructor() {
        if (!Variables.instance) {
            this.canvas = document.getElementById('colaDiv');
            this.zonaCajas = document.getElementById('cajas');
            this.zonaCola = document.getElementById('cola');
            this.agregarPersonaButt = document.getElementById('agregarPersonaBtn');
            this.agregarCajeroButt = document.getElementById('agregarCajeroBtn');
            this.completarTranscButt = document.getElementById('eliminarPersonaBtn');
            this.cantPersonas = 0;
            this.cantCajeros = 0;
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
    agregarCajero(){
        this.cantCajeros++
    }
}
export default Variables