const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Teclado', precio: 80},
    {nombre: 'Mouse', precio: 40},
    {nombre: 'Auriculares', precio: 60},
    {nombre: 'Microfono', precio: 30},
    {nombre: 'Mousepad', precio: 15},
]


for(let i = 0; i < carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

//Method
carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);

}) 

