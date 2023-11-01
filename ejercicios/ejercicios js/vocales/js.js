const nombre = prompt("Ingresa un nombre:");
const cantidadDeVocales = nombre.match(/[AEIOUaeiou] /g).length;
alert("El nombre " + nombre + " tiene " + cantidadDeVocales + " vocales");