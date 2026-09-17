const mainHTML = document.getElementById("main");

mainHTML.addEventListener("click", function() {
    if(mainHTML.style.backgroundColor === "yellow") mainHTML.setAttribute("style", "background-color: white;")
    else mainHTML.setAttribute("style", "background-color: yellow;")
});