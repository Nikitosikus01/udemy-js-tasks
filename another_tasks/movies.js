"Use strict";

// написать архитектуру, как потом в словаре будет.

let amountOfFilms;
const personalMoviesDB = {
    count: amountOfFilms,
    movies: {},
    actors: [],
    genres: [],
    privat: false,  
    
    start: function start() {
        this.count = +prompt("How many films did you watch?", "");
        while (this.count === "" || this.count.length < 5 || isNaN(this.count) || this.count == null){
            this.count = +prompt("Error ...\nHow many films did you watch?", "");
        } 
    },

    moviesRate: function moviesRate() {
        let lastFilm = prompt("What film did you watch last?", "");
    
        for (let index = 0; index < 1; index++) {
            let rateOfLastFilm = +prompt("How do you rate that? (max: 100)", "");
            
            if (rateOfLastFilm < 0 || rateOfLastFilm > 100 || isNaN(rateOfLastFilm)) {
                alert("mistake");
                index--;
            } else {
                personalMoviesDB.movies[lastFilm] = rateOfLastFilm;
            }     
        }
    },

    toggleVisibleMyDB: function toggleVisibleMyDB() {
        // console.log("privat is ", personalMoviesDB.privat);
        if (personalMoviesDB.privat) {
            personalMoviesDB.privat = false;
        } else {
            personalMoviesDB.privat = true;
        }
        // console.log("privat is ", personalMoviesDB.privat);
    },

    showMyDB: function showMyDB (hidden) {
          if (!hidden) {
                console.log(personalMoviesDB);
          }
    },
    
    writeYourGenres: function writeYourGenres() {
        for(let i = 0; i < 3; i++){
            let genre = prompt(`What is your favorite genre № ${i+1}?`, "action");
            if (genre !== '' || genre !== null) { // жанр не должен быть числом или пустой строкой
                personalMoviesDB.genres[i] = genre;
            } else {
                i--;
                alert("Mistake.");
            }
        }

        // for (let index = 0; index < personalMoviesDB.genres.length; index++){
        //     console.log(`Favorite genre #${index+1} is ${personalMoviesDB.genres[index]}`);
        // }
        personalMoviesDB.genres.forEach((element, i) => {
            console.log(`Favorite genre #${i+1} is ${element}`);
        });
    },
};


// personalMoviesDB.start();
// personalMoviesDB.moviesRate();
// personalMoviesDB.toggleVisibleMyDB();
personalMoviesDB.writeYourGenres();
console.log(personalMoviesDB);




