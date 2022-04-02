class Interfaz {
    constructor() {
        this.img
    }

    cargarInterfaz() {
        this.img = loadImage('./interfaces/Pantalla1.png');
    }

    pintarInterfaz() {
        image(this.img, 0, 0);
    }
}