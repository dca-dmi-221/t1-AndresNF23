class Interfaz {
    constructor() {
        this.img
    }

    cargarInterfaz() {
        this.img = loadImage('./Interfaces/Pantalla1.png');
    }

    pintarInterfaz() {
        image(this.img, 0, 0);
    }
}