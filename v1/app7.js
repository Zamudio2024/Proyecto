const carrito = [];
pregunta = prompt("Agrega las cosas al carrito: ");
carrito.push(pregunta);
while(confirm("¿Sigue agregando?  ")){
    pregunta = prompt("Siguiente objeto: ");
    carrito.push(pregunta);
}
for(let carro of carrito){
    console.log(carro);

}