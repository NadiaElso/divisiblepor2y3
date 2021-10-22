let divisiblepor2y3: number = -1;

while (divisiblepor2y3 > 0 && divisiblepor2y3 < 100) {
  divisiblepor2y3 = number(prompt("Ingrese un número que sea del 1 al 100"));
  if (divisiblepor2y3 % 2 === 0) {
    console.log("Es un número divisible por 2");
  } else {
    if (divisiblepor2y3 % 3 === 0) {
      console.log("El número es divisible por 3");
    }
  }
}
