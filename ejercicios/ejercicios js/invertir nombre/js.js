function invertirNombre() {
  const nombre = prompt("Ingrese su nombre:");
  const nombreInvertido = nombre.split('').reverse().join('');
  alert('Nombre Ingresado: ' + nombre + '\n Nombre invertido: ' + nombreInvertido);
}

invertirNombre();