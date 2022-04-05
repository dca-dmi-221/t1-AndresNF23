class Logica{

    constructor(){
        
        this.songs = [
            {
                id: 0,
                name:"The Day",
                artist: "PornoGraffitti",
                file: loadSound('./Temp1/the day.mp3'),
            },
        
            {
                id: 1,
                name:"I've come!",
                artist: "Boku No Hero Academia",
                file: loadSound('./Temp1/watashi ga kita.mp3'),
            },

            {
                id: 2,
                name:"You Can Be A Hero",
                artist: "Boku No Hero Academia",
                file: loadSound('./Temp1/Kimi wa hiro ni nareru.mp3'),
            },

            {
                id: 3,
                name:"Heroes",
                artist: "Brian The Sun",
                file: loadSound('./Temp1/ending.mp3'),
            },

            {
                id: 4,
                name:"Peace Sign",
                artist: "Kenshi Yonezu",
                file: loadSound('./Temp2/Opening2.mp3'),
            },

            {
                id: 5,
                name:"Bakusatsuou!!",
                artist: "Boku No Hero Academia",
                file: loadSound('./Temp2/Bakusatsuou.mp3'),
            },

            {
                id: 6,
                name:"Jet Set Run",
                artist: "Boku No Hero Academia",
                file: loadSound('./Temp2/Jet Set Run.mp3'),
            },

            {
                id: 7,
                name:"Datte Atashino Hero",
                artist: "LiSA",
                file: loadSound('./Temp2/Ending2.mp3'),
            },

            {
                id: 8,
                name:"Sora ni Uteba",
                artist: "amazarashi",
                file: loadSound('./Temp3/Opening3.mp3'),
            },

            {
                id: 9,
                name:"Just Another Hero",
                artist: "Yuki Hayashi",
                file: loadSound('./Temp3/Just Another Hero.mp3'),
            },

            {
                id: 10,
                name:"Koukai no Uta",
                artist: "Sayuri",
                file: loadSound('./Temp3/Ending4.mp3'),
            },
        ] 
    }
    setup(){
        //Array de las playlist
        this.playlist = []
        this.playlist.push(new Playlist(0, "Primera Temporada", [this.songs[0], this.songs[1], this.songs[2], this.songs[3]]));
        this.playlist.push(new Playlist(1, "Segunda Temporada", [this.songs[4], this.songs[5], this.songs[6], this.songs[7]]));
        this.playlist.push(new Playlist(2, "Segunda Temporada", [this.songs[8], this.songs[9], this.songs[10]]));

        this.volumeSlider = createSlider(0.0, 1.0, 0.5, 0.01);
        this.volumeSlider.position(478, 932);
    }
}