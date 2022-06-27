"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Metodos para objetos: No podremos modificar, agregar o eliminar propiedades
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);

// Metodo para saber si el objeto esta congelado
console.log(Object.isFrozen(producto));
