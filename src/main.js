import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

let allMovies = data.films;
//console.log(allMovies[0].poster);
let moviePoster=allMovies[2].poster;
let screenPoster= document.createElement("IMG");
screenPoster.setAttribute("src", moviePoster);
screenPoster.setAttribute("alt", "third poster");

document.body.appendChild(screenPoster);

console.log(moviePoster);


git 
for (let item = 0; item < allMovies.length; item++) {
    console.log(allMovies[item].title);
    console.log()
}
 //innerhtml
//createlement
 //setatribute







/* let imageObj = new Image();
imageObj.src =allMovies.poster;
//context.drawImage( imageObj, 0, 0 ); */

//console.log(allMovies);

/* let arrayData=data;
console
foreach(arrayData){

} */

//onsole.log(example, data);

