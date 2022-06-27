"use strict";

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Metodos para objetos: Solo prodremos modificar los valores ya existentes, no podremos ni agregar ni eliminar valores
Object.seal(producto);

producto.disponible = false;
// producto.imagen = 'imagen.jpg';

console.log(producto);

// Metodo para saber si el objeto esta congelado
console.log(Object.isSealed(producto));
console.log(Object.isFrozen(producto));