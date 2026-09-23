const mainHTML = document.getElementById("main");
let mainHTMLColor = mainHTML.style.backgroundColor;

//NO USAR LOS DOS EVENTOS A LA VEZ

//Evento cambio de fondo al hacer click en el fondo
//mainHTML.addEventListener("click", changeColor);

//Crear un botón
const newButtonMain = document.createElement("button");
newButtonMain.innerHTML = "Fondo";
newButtonMain.style.backgroundColor = "pink";
newButtonMain.style.border = "1px solid white";
newButtonMain.style.borderRadius = "15px";
newButtonMain.style.padding = "0.5%";
newButtonMain.style.margin = "1%";
mainHTML.appendChild(newButtonMain);

//Evento cambio de fondo al hacer click en el botón
newButtonMain.addEventListener("click", changeColor);

//Función para cambiar el color de fondo
function changeColor() {
  let newColor = mainHTMLColor === "yellow" ? "white" : "yellow";

  if (!mainHTMLColor) newColor = "white";

  //Cambiar el color de fondo
  mainHTML.setAttribute("style", `background-color: ${newColor};`);
  mainHTMLColor = newColor;
}

let numItemsCarrito = document.getElementById("numItemsCarrito");
let btnCarrito = document.getElementById("btnCarrito");

let texto = `Carrito:`;
btnCarrito.innerHTML = `${texto} 0`;

numItemsCarrito.addEventListener("input", function () {
  let totalInput = numItemsCarrito.value;
  let total = parseInt(totalInput);
  if (!total) {
    totalInput = 0;
    total = 0;
    cambioTextoCarrito(totalInput);
  }
  if (totalInput < 0) {
    totalInput = 0;
    total = 0;
    cambioTextoCarrito(totalInput);
  } else if (totalInput > 10) {
    totalInput = 10;
    total = 10;
    cambioTextoCarrito(totalInput);
  }

  cambioTextoCarrito(totalInput);
});

function cambioTextoCarrito(totalInput = 0) {
  btnCarrito.innerHTML = `${texto} ${totalInput}`;
}


// IMPORTAR FUNCIONES DE OTROS ARCHIVOS
import { test } from './funciones.js';
test();