const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Teclado', precio: 80},
    {nombre: 'Mouse', precio: 40},
    {nombre: 'Auriculares', precio: 60},
    {nombre: 'Microfono', precio: 30},
    {nombre: 'Mousepad', precio: 15},
]


// forEach: trabaja sobre la misma variable
const nuevoArreglo = carrito.forEach( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;

}) 

// map: crea una variable nueva con un nuevo array
const nuevoArreglo2 = carrito.map( function(producto){
    return `${producto.nombre} - Precio: ${producto.precio}`;

}) 

console.log(nuevoArreglo);
console.log(nuevoArreglo2);