class Variables {
    constructor() {
        if (!Variables.instance) {
            this.canvas = document.getElementById('colaCanvas');
            this.contexto = this.canvas.getContext('2d');
            Variables.instance = this;
        }
        return Variables.instance

    }
}
export default Variables