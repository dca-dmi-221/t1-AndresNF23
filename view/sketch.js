let logica, playlist;

let interfaz = new Interfaz();

function preload() {
  interfaz.cargarInterfaz(); 
  soundFormats('mp3', 'ogg');
  
  logica = new Logica();

  console.log(logica);
}

function setup() {

  logica = new Logica();
  playlist = new Playlist();

  createCanvas(1280, 720);
  

}

function draw() {

  interfaz.pintarInterfaz();
}
