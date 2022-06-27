const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}


// Extraer de modo antiguo

// const nombre = producto.nombre;
// console.log(nombre);

// Extraer con destructuring

// const {nombre} = producto;
// const {precio} = producto;
// console.log(nombre);
// console.log(precio);

// Podemos simplificar
const {nombre, precio, disponible, noExiste} = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);
console.log(noExiste);

