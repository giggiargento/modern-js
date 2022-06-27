// Ejemplo de carrito de compras

const carrito = [];

// Definimos productos dentro de carrito
const producto = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400,
}

const producto2 = {
    nombre: 'Celular',
    precio: 200,
}

// Agrega productos en orden
carrito.push(producto);
carrito.push(producto2);

const producto3 = {
    nombre: 'Teclado',
    precio: 80,
}

// Agrega producto en primer lugar
carrito.unshift(producto3);




console.table(carrito);


