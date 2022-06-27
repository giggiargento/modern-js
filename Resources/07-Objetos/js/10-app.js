const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}


console.log(producto); 
console.log(medidas);

// Copiar objetos y unirlos en uno nuevo
const resultado = Object.assign (producto, medidas);

// Metodo Spread Operator o Rest Operator
const resultado2 = { ...producto, ...medidas };

console.log(resultado);
console.log(resultado2);
