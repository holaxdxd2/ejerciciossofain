function calcular(opcion, num1, num2) {
    switch (opcion) {
      case 1:
        return num1 + num2;
      case 2:
        return num1 - num2;
      case 3:
        return num1 * num2;
      case 4:
        if (num2 === 0) return "no se puede dividir por 0";
        return num1 / num2;
      default:
        return "escriba una opcion valida";
    }
  }
  
  function menuCalculadora() {
    const opcion = parseInt(prompt("Seleccione la operacion que desea realizar:\n 1. Sumar\n 2. Restar\n 3. Multiplicar\n 4. Dividir"));
    const num1 = parseFloat(prompt("Ingrese el primer número:"));
    const num2 = parseFloat(prompt("Ingrese el segundo número:"));
  
    const resultado = calcular(opcion, num1, num2);
    console.log("El resultado es: " + resultado);
  }
  
  menuCalculadora();