const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);

// Como acceder a todos los elementos de una regla (Ejemplo carrito de compras o mg en instagram)
// Debemos conocer cuanto mide el arreglo

console.log(meses.length);


for(let i = 0; i < meses.length; i++){
    console.log(meses[i]);
}




