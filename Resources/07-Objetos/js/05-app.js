const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m',
        },
        fabricacion: {
        pais: 'Japon',
        año: '2015',
        }
    }
}

//console.log(producto);

console.log(producto.informacion.fabricacion.pais);