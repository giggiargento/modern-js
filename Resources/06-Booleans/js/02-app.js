const boolean1 = false;
const boolean2 = true;
const boolean3 = "true";


console.log(boolean1 === boolean2); //false
console.log(boolean2 === true); //true
console.log(boolean2 === "true"); //false

console.log(boolean2 === parseInt(boolean3)); //false porque no funciona como con numeros y strings
