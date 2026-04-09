import { songs } from "./data.js";

//Exercise 1: Get the array of all Artists.
function getAllArtists(array) {
  const result = array.map((song) => song.artist);
  console.log("Exercise 1 ->", result);
  return result;
}

getAllArtists(songs);

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist) {
  const result = array.filter((song) => song.artist === artist);
  console.log("Exercise 2 ->", result);
  return result;
}

getSongsFromArtist(songs, "Aerosmith");

//Exercise 3: Alphabetic order by title - Orden alfabético por título
function orderAlphabetically(array) {
  const tittlesSongs = array.map((song) => song.title).sort();
  //console.log("Exercise 3 ->", tittlesSongs.slice(0, 10));
  return tittlesSongs.slice(0, 10);
}

orderAlphabetically(songs);

//Exercise 4: Order by year, ascending - Ordenar por año, ascendente
function orderByYear(array) {
  const result = [...array].sort(
    (a, b) => a.year - b.year || a.title.localeCompare(b.title),
  );
  //console.log("Exercise 4 ->", result);
  return result;
}

orderByYear(songs);

//Exercise 5: Filter songs by genre
let genre = "Rock";
function songsByGenre(array, genre) {
  const result = array.filter((song) => song.genre.includes(genre));
  //console.log("Exercise 5 ->", result);
  return result;
}

songsByGenre(songs, genre);
//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(array) {
  const result = array.map((song) => {
    const [mins, secs] = song.duration.split(" ");
    return { ...song, duration: parseInt(mins) * 60 + parseInt(secs) };
  });

  //console.log("Exercise 6 ->", result);
  return result;
}

minutsToSeconds(songs);

//Exercise 7: Get the longest song
function getLongestSong(array) {
  const songsInSeconds = minutsToSeconds(array);
  const max = songsInSeconds.reduce((acc, song) => song.duration > acc ? song.duration : acc, 0);
  const result = songsInSeconds.filter((song) => song.duration === max);
  //console.log("Exercise 7 ->", result);
  
  return result;
}

getLongestSong(songs);

//Exercise 8: Get the shortest song
function getShortestSong(array) {
  const songsInSeconds = minutsToSeconds(array);
  const min = songsInSeconds.reduce((acc, song) => song.duration < acc ? song.duration : acc, Infinity);
  const result = songsInSeconds.filter((song) => song.duration === min);
  console.log("Exercise 8 ->", result);
  return result;
}

getShortestSong(songs);

export {
  getAllArtists,
  getSongsFromArtist,
  orderAlphabetically,
  orderByYear,
  songsByGenre,
  minutsToSeconds,
  getLongestSong,
  getShortestSong,
};