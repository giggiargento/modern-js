// Undefined, variable definida pero valor no
let numero;

console.log(numero);
console.log(typeof numero);


// Null
let numero2 = null;

console.log(numero2);
console.log(typeof numero2); // Los null son typeof objetos 

// Los comparamos
console.log(numero == numero2); //True ??? WTF
console.log(numero === numero2); //False !!!

const conclusion = 'Se recomienda usar comparadores estrictos, los podemos definir como regla con eslintc';
console.log(conclusion);
