const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

// Agregar valor a un objeto
producto.imagen = "imagen.jpg";

// Eliminar valor a un objeto
delete producto.disponible;


console.log(producto);