// Object literal
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
}

// Object constructor
function Producto(nombre, precio,){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
    this.category = 'Tech';
}

const producto2 = new Producto('Monitor 20 pulgadas', 500);
console.log(producto2);

const producto3 = new Producto('Tablet', 200);
console.log(producto3);

const nuevoProducto = new Producto ('Nuevo producto agregado dentro de function Producto', 'Su precio es de 200');
console.log(nuevoProducto);