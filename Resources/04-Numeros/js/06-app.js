//Convertir Strings a numeros

const numero1 = "20";
const numero2 = "20.2";
const numero3 = "Uno";
const numero4 = 20;


console.log(numero1);
console.log(Number.parseInt(numero1));
console.log(Number.parseInt(numero2));
console.log(Number.parseFloat(numero2));
console.log(Number.parseInt(numero3)); // No es un numero entonces retorna NaN



// Revisar si un numero es entero o no
console.log(Number.isInteger(numero2));
console.log(Number.isInteger(numero4));

let frasefinal = 'Todo esto es util para realizar comparaciones en una base de datos';
console.log(frasefinal);
