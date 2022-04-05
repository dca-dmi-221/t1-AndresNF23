let logica, playlist;

let interfaz = new Interfaz();

function preload() {
  interfaz.cargarInterfaz();
  soundFormats('mp3', 'ogg');
  logica = new Logica();
  logica.loadFont()

  console.log(logica);
}

function setup() {

  createCanvas(1280, 720);
  logica.setup();

}

function draw() {

  interfaz.pintarInterfaz();
  logica.drawSongs(1012, 200)
}

function mousePressed() {

  console.log("MouseX: " + mouseX + " MouseY: " + mouseY)

  logica.buttons()
}