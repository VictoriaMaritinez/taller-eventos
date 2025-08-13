// Evento del div
const div = document.querySelector(".box");
div.addEventListener("click", (e)=>{
    if(!e.target.matches('button') && !e.target.closest('button')){
        e.stopPropagation();
    alert("Hola soy el Div");
    }
});
// Manejar evento del boton
function saludar(e){
    if(e){
        e.stopPropagation();
    }
    alert("Hola");
}