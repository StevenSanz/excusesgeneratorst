/* eslint-disable */
import "./style.css";

let who = ["Annabelle", "Rickroll", "Windows", "El Innombrable", "Sauron"];
let action = ["se comió", "quemo", "hizo desaparecer", "hechizo", "robo"];
let what = [
  "mis deberes",
  "el ordenador",
  "mi coche",
  "a mi perro",
  "Los libros"
];
let when = [
  "mientras dormia",
  "cuando no estaba en casa",
  "mientras me duchaba",
  "mientras limpiaba",
  "cuando sali a comprar"
];
window.onload = () => {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = press();
  });
};

function press() {
  let quien = Math.round(Math.random() * (who.length - 1));
  let acto = Math.round(Math.random() * (action.length - 1));
  let que = Math.round(Math.random() * (what.length - 1));
  let cuando = Math.round(Math.random() * (when.length - 1));

  return who[quien] + " " + action[acto] + " " + what[que] + " " + when[cuando];
}
let agregarQuien = document.getElementById("agregarQuien"); //agregar nuevo sujeto
let newWho = document.getElementById("nuevoQuien");

agregarQuien.addEventListener("click", () => {
  who.push(newWho.value);
  newWho.value = "";
  newWho.focus();
});

let agregarActo = document.getElementById("agregarActo"); //agregar nueva acción
let newActo = document.getElementById("nuevoActo");

agregarActo.addEventListener("click", () => {
  action.push(newActo.value);
  newActo.value = "";
  newActo.focus();
});

let agregarQue = document.getElementById("agregarQue"); // agregar nuevo que
let newWhat = document.getElementById("nuevoQue");

agregarQue.addEventListener("click", () => {
  what.push(newWhat.value);
  newWhat.value = "";
  newWhat.focus();
});

let agregarCuando = document.getElementById("agregarCuando"); // agregar nuevo cuando
let newWhen = document.getElementById("nuevoCuando");

agregarCuando.addEventListener("click", () => {
  when.push(newWhen.value);
  newWhen.value = "";
  newWhen.focus();
});
