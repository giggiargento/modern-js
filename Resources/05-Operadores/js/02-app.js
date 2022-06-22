// Comparar numeros

const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

// Revisar si un numero es igual a otro
console.log(numero1 == numero3); //false
console.log(numero1 == numero2); //true revisa solo valor

// Comparador estricto
console.log(numero1 === numero2); //false, revisa tipo de dato
console.log(numero1 === parseInt(numero2)); //true, porque convertimos numero2 de string a numero

// Conocer tipo de dato
console.log(typeof numero1); // number
console.log(typeof numero2); // string

// Diferente a 
const password1 = "admin";
const password2 = "Admin";

console.log(password1 != password2); //true
console.log(numero1 != numero2); //false
console.log(numero1 !== numero2); //true
console.log(numero1 !== parseInt(numero2)); //false

