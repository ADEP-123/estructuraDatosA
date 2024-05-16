class Variables {
    constructor() {
        if (!Variables.instance) {
            this.canvas = document.getElementById('colaDiv');
            this.zonaCajas = document.getElementById('cajas');
            this.zonaCola = document.getElementById('cola');
            this.zonaPersonasEnCajero = document.getElementById('personasEnCajero');
            this.agregarPersonaButt = document.getElementById('agregarPersonaBtn');
            this.agregarCajeroButt = document.getElementById('agregarCajeroBtn');
            this.quitarCajeroButt = document.getElementById('eliminarCajeroBtb');
            this.completarTranscButt = document.getElementById('eliminarPersonaBtn');
            this.maxWidthGame = document.getElementById('juegoDiv').clientWidth;
            this.cantPersonas = 0;
            this.cantCajeros = 0;
            this.lastUser = "";
            this.arrPersonasEnEsp = [];
            this.personaPos = 0;
            Variables.instance = this;
        }
        return Variables.instance
    }

    agregarPersona() {
        this.cantPersonas++;
    }

    quitarPersona() {
        this.cantPersonas--;
    }

    setLastuser(user) {
        this.lastUser = user
    }

    agregarCajero() {
        this.cantCajeros++
    }
    quitarCajero() {
        this.cantCajeros--
    }
}
export default Variables