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

const producto3 = {
    nombre: 'Teclado',
    precio: 80,
}

let resultado; 
resultado = [...carrito, producto];
resultado = [...resultado, producto2];
resultado = [producto3, ...resultado];



console.table(resultado);
console.table(carrito);


