const mainHTML = document.getElementById("main");
let mainHTMLColor = mainHTML.style.backgroundColor;

//Evento cambio de fondo al hacer click en el fondo
mainHTML.addEventListener("click", changeColor);

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
