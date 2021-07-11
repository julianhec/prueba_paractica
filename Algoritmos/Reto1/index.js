function main() {
  var n = 0;
  var suma = 0;
  const valorMaxVector = 15;
  const valorMaxteclado = 30;

  while (n <= 0 || n > valorMaxVector || isNaN(n)) {
    n = parseInt(
      prompt("Ingrese el número de elementos que desee leer del vector")
    );

    if (n <= 0 || n > valorMaxVector || isNaN(n)) {
      alert("debe ingresar un valor entre 1 y 15");
    }
  }

  var v1 = Array(n);
  var v2 = Array(n);

  for (var i = 0; i < n; i++) {
    while (v1[i] <= 0 || v1[i] > valorMaxteclado || isNaN(v1[i])) {
      v1[i] = parseInt(
        prompt("Ingrese un número entre 1 y 30 para el vector 1")
      );

      if (v1[i] <= 0 || v1[i] > valorMaxteclado || isNaN(v1[i])) {
        alert("debe ingresar un valor entre 1 y 30");
      }
    }
  }

  for (var i = 0; i < n; i++) {
    while (v2[i] <= 0 || v2[i] > valorMaxteclado || isNaN(v2[i])) {
      v2[i] = parseInt(
        prompt("Ingrese un número entre 1 y 30 para el vector 2")
      );

      if (v2[i] <= 0 || v2[i] > valorMaxteclado || isNaN(v2[i])) {
        alert("debe ingresar un valor entre 1 y 30");
      }
    }
  }

  v1.sort(function (a, b) {
    return a - b;
  });

  v2.sort(function (a, b) {
    return a - b;
  });

  document.write("Los valores del vector 1 son: " + v1 + "<br>");
  document.write("Los valores del vector 2 son: " + v2 + "<br>");

  for (var i = 0; i < n; i++) {
    suma = v1[i] + v2[i];

    document.write(
      "La suma de los valores de los vectores en " + i + " es: " + suma + "<br>"
    );
  }
}

main();
