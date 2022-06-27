// Ejemplo de carrito de compras

const carrito = [];

// Definimos productos dentro de carrito
const Monitor = {
    nombre: 'Monitor 32 pulgadas',
    precio: 400,
}

const Celular = {
    nombre: 'Celular',
    precio: 200,
}

const Teclado = {
    nombre: 'Teclado',
    precio: 80,
}

const Mouse = {
    nombre: 'Mouse',
    precio: 50,
}

const Auriculares = {
    nombre: 'Auriculares',
    precio: 50,
}

// Agrega productos en orden
carrito.push(Monitor);
carrito.push(Celular);
console.table(carrito);

// Agrega producto en primer lugar
carrito.unshift(Teclado);
console.table(carrito);

//Agregamos mas elementos
carrito.push(Mouse);
carrito.push(Auriculares);
console.table(carrito);

// Eliminar ultimo elemento de un array
carrito.pop()
console.table(carrito);

// Eliminar del inicio del array
carrito.shift();
console.table(carrito);

// Eliminamos de cualquier posicion
carrito.splice(1, 1); // El primer numero define la posicion, el segundo numero cuantos elementos a partir de esa posicion queres eliminar
console.table(carrito);