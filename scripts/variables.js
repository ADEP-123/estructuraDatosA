class Variables {
    constructor() {
        if (!Variables.instance) {
            this.canvas = document.getElementById('colaDiv');
            this.zonaCajas = document.getElementById('cajas');
            this.zonaCola = document.getElementById('cola');
            this.agregarPersonaButt = document.getElementById('agregarPersonaBtn');
            this.agregarCajeroButt = document.getElementById('agregarCajeroBtn');
            this.quitarCajeroButt = document.getElementById('eliminarCajeroBtb');
            this.completarTranscButt = document.getElementById('eliminarPersonaBtn');
            this.complTransSelect = document.getElementById('complTransSelect')
            this.maxWidthGame = document.getElementById('juegoDiv').clientWidth;
            this.errorMessagesList = document.querySelector(".alertas")
            this.errorMessageEx = document.querySelector(".alerta")
            this.cantPersonas = 0;
            this.cantCajeros = 0;
            this.lastUser = "";
            this.arrPersonasEnEsp = [];
            this.personaPos = 0;
            this.persCajeros = [];
            this.lastIdPersona = 0;
            this.lastIdCajero = 0;
            Variables.instance = this;
        }
        return Variables.instance
    }

    agregarPersona() {
        this.cantPersonas++;
        this.lastIdPersona++;
    }

    quitarPersona() {
        this.cantPersonas--;
    }

    setLastuser(user) {
        this.lastUser = user
    }

    agregarCajero() {
        this.cantCajeros++
        this.lastIdCajero++
    }

    quitarCajero() {
        this.cantCajeros--
    }

    setNewPersCajero(persCajeros) {
        this.persCajeros = persCajeros
    }

    setNewArrPersEnEsp(arrPersonasEnEsp) {
        this.arrPersonasEnEsp = arrPersonasEnEsp
    }
}
export default Variables