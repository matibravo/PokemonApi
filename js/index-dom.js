import btnUp from "./btnUp.js";
import buscar from "./buscar.js";
import loadPokemon from "./fetch.js";


document.addEventListener("DOMContentLoaded", e=>{
    console.log("Hola soy Matías xD");
    loadPokemon();
    buscar();
    btnUp();
});