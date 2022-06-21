const usuario = 'Giggi';

// Repetir cadena de texto
const text = '!'.repeat(2);
console.log(usuario);
console.log(text);

// Concateno strings con repeticion
console.log(usuario + text);
console.log(`${usuario} ${text}`);

// Split permite dividir un string
const actividad = 'Esta aprendiendo Js Moderno';
console.log(actividad.split(" "));

const hobbies = 'Japanese,Games,Animals,Art';
console.log(hobbies.split(","))

const tweet = "Japanese Games Animals #Art";
console.log(tweet.split('#'));
