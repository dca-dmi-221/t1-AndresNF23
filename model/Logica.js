class Logica {

    constructor() {

        this.songs = [{
                id: 0,
                name: "The Day",
                artist: "PornoGraffitti",
                file: loadSound('./Temp1/the day.mp3'),
            },

            {
                id: 1,
                name: "I've come!",
                artist: "Boku No Hero Academia",
                file: loadSound('./Temp1/watashi ga kita.mp3'),
            },

            {
                id: 2,
                name: "You Can Be A Hero",
                artist: "Boku No Hero Academia",
                file: loadSound('./Temp1/Kimi wa hiro ni nareru.mp3'),
            },

            {
                id: 3,
                name: "Heroes",
                artist: "Brian The Sun",
                file: loadSound('./Temp1/ending.mp3'),
            },

            {
                id: 4,
                name: "Peace Sign",
                artist: "Kenshi Yonezu",
                file: loadSound('./Temp2/Opening2.mp3'),
            },

            {
                id: 5,
                name: "Bakusatsuou!!",
                artist: "Boku No Hero Academia",
                file: loadSound('./Temp2/Bakusatsuou.mp3'),
            },

            {
                id: 6,
                name: "Jet Set Run",
                artist: "Boku No Hero Academia",
                file: loadSound('./Temp2/Jet Set Run.mp3'),
            },

            {
                id: 7,
                name: "Datte Atashino Hero",
                artist: "LiSA",
                file: loadSound('./Temp2/Ending2.mp3'),
            },

            {
                id: 8,
                name: "Sora ni Uteba",
                artist: "amazarashi",
                file: loadSound('./Temp3/Opening3.mp3'),
            },

            {
                id: 9,
                name: "Just Another Hero",
                artist: "Yuki Hayashi",
                file: loadSound('./Temp3/Just Another Hero.mp3'),
            },

            {
                id: 10,
                name: "Koukai no Uta",
                artist: "Sayuri",
                file: loadSound('./Temp3/Ending4.mp3'),
            },
        ]

        this.playlistNumber = 0;
    }

    setup() {

        this.playlist = []
        this.playlist.push(new Playlist(0, "Primera Temporada", [this.songs[0], this.songs[1], this.songs[2], this.songs[3]]));
        this.playlist.push(new Playlist(1, "Segunda Temporada", [this.songs[4], this.songs[5], this.songs[6], this.songs[7]]));
        this.playlist.push(new Playlist(2, "Segunda Temporada", [this.songs[8], this.songs[9], this.songs[10]]));

        this.volumeSlider = createSlider(0.0, 1.0, 0.5, 0.01);
        this.volumeSlider.position(478, 932);
    }

    loadFont() {

        this.regular = loadFont("assets/Poppins-Regular.ttf")
        this.bold = loadFont("./assets/Poppins-Bold.ttf")
    }

    buttons() {

        console.log()

        if (mouseX > 88 && mouseX < 374 && mouseY > 180 && mouseY < 314) {

            console.log("Playlist1")
            this.playlistNumber = this.playlist[0].id;
            console.log(this.playlistNumber)
        }

        if (mouseX > 88 && mouseX < 374 && mouseY > 360 && mouseY < 495) {

            console.log("Playlist2")
            this.playlistNumber = this.playlist[1].id;
            console.log(this.playlistNumber)
        }

        if (mouseX > 88 && mouseX < 374 && mouseY > 532 && mouseY < 662) {

            console.log("Playlist3")
            this.playlistNumber = this.playlist[2].id;
            console.log(this.playlistNumber)
        }

        if (mouseX > 615 && mouseX < 662 && mouseY > 502 && mouseY < 545) {

            console.log("Play/Pause")
        }

        if (mouseX > 545 && mouseX < 590 && mouseY > 502 && mouseY < 545) {

            console.log("prev")
        }

        if (mouseX > 688 && mouseX < 732 && mouseY > 502 && mouseY < 545) {

            console.log("next")
        }
    }

    playButton() {

    }

    drawSongs(posX, posY) {

        for (let index = 0; index < this.playlist[this.playlistNumber].songs.length; index++) {

            let posYplus = posY + 20;
            fill(0)
            textSize(18);
            textFont(this.bold)
            text(this.playlist[this.playlistNumber].songs[index].name, posX, posY + (index * 60))
            textSize(14);
            textFont(this.regular)
            text(this.playlist[this.playlistNumber].songs[index].artist, posX, posYplus + (index * 60))
        }

    }
}