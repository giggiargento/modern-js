const producto = 'Monitor de 20 pulgadas';

// Reemplazamos texto de un string
console.log(producto);
console.log(producto.replace('pulgadas','"'));
console.log(producto.replace('Monitor','Monitor curvo'));


// Cortamos texto de un string
console.log(producto.slice(0, 13));
console.log(producto.slice(14));


// Alernativa a slice que ignora orden de numeros
console.log(producto.substring(0,13));
console.log(producto.substring(13,0));

const usuario = 'Giggi';
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));