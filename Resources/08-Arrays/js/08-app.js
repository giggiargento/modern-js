// Destructuring in Objects
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Extraer con destructuring
const {nombre} = producto;
console.log(nombre);

// Destructuring in Arrays
const numeros = [10,20,30,40,50];

// const [primero, , , ,quinto] = numeros;

const [primero, segundo, ...tercero] = numeros;
console.log(primero);
console.log(tercero);



