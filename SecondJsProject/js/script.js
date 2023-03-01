/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

let numberOfFilms;
let oneOfLastFilmSeen;
let mark;

do {
    numberOfFilms = +prompt("How many films have you already seen?", "0");
} while (!numberOfFilms || numberOfFilms === "" || numberOfFilms.length > 50);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    oneOfLastFilmSeen = prompt("What is the name of the latest film you have seen?", "");
    if (!oneOfLastFilmSeen || oneOfLastFilmSeen.trim() === "" || oneOfLastFilmSeen.length > 50) {
        i--;
        continue;
    }
    mark = +prompt("What is the mark you have given to this movie?", "");
    if (!mark || mark === "" || mark.length > 50) {
        i--;
        continue;
    }
    personalMovieDB.movies[oneOfLastFilmSeen] = mark;
}

console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log("You watched only a few movies");
}else if (personalMovieDB.count <= 30) {
    console.log("You are classical viewer");
}else {
    console.log("You are really film fan");
}