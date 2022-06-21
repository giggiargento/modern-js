const producto = 'Monitor de 20 pulgadas ';
const precio = '30 USD ';

// Concatenamos strings
console.log(producto.concat(precio));
console.log(producto.concat('en descuento'));
console.log( producto + 'con un precio de ' + precio);
console.log("El producto " + producto + "tiene un precio de " + precio);
// Template strings: forma nueva de concatenar strings
console.log(`El producto ${producto}tiene un precio de $${precio}`);

const perro = 'Pitbull';
const nombre = 'Pipo';
// Ejemplo que ya agrega espacios automaticos entre cada const
console.log("Mi perro es un",perro,"y se llama",nombre);