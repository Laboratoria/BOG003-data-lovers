import { example } from './data.js';
import data from './data/ghibli/ghibli.js';

let allMovies = data.films;
//console.log(allMovies[0].poster);


for (let i=0; i<allMovies.length;i++){
    let screenPoster= document.createElement("IMG");
    //let titleofMovie=document.createElement("TITLE");
    //titleofMovie=allMovies[i].title;
    screenPoster.setAttribute("src", allMovies[i].poster);
    document.body.appendChild(screenPoster);    
}


//document.body.appendChild(screenPoster);

//console.log(moviePoster);



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

