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

const { nombre, informacion, informacion: { fabricacion, fabricacion: { pais } } } = producto;
console.log(nombre);
console.log(informacion);
console.log(fabricacion);
console.log(pais);

alert('Sentate a practicar para fijar el conocimiento');