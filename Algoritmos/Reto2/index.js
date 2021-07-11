function main() {
  var n = 0;
  const vacas = document.getElementById("vacas");

  while (n < 3 || n > 50 || isNaN(n)) {
    n = parseInt(prompt("Ingrese el total de vacas que posee la hacienda"));

    if (n < 3 || n > 50 || isNaN(n)) {
      alert("debe ingresar un valor mayor a 3");
    }
  }

  var diasProduccion = Array(7);

  for (var i = 0; i < diasProduccion.length; i++) {
    diasProduccion[i] = Array(n);

    for (var j = 0; j < n; j++) {
      while (
        diasProduccion[i][j] < 0.0 ||
        diasProduccion[i][j] > 11.9 ||
        isNaN(diasProduccion[i][j])
      ) {
        diasProduccion[i][j] = parseFloat(
          prompt(
            "Ingrese cantidad de litros producido por la vaca " +
              j +
              " en el día " +
              i
          )
        );

        if (
          diasProduccion[i][j] < 0.0 ||
          diasProduccion[i][j] > 11.9 ||
          isNaN(diasProduccion[i][j])
        ) {
          alert("debe ingresar un valor entre 0.0 y 11.9 litros");
        }
      }
    }
  }

  var diaMayorProd = 0;
  var numDiaMp = 0;
  var diaMenorProd = 40;
  var numDiaMep = 0;
  var dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo",
  ];

  vacas.innerHTML += "<td>N° vaca mayor producción</td>";

  for (let a = 0; a < diasProduccion.length; a++) {
    var totalPd = 0;
    var vacaMayor = 0;
    var numVacaMayor = 0;

    for (var b = 0; b < n; b++) {
      var vacaActual = diasProduccion[a][b];
      totalPd = totalPd + diasProduccion[a][b];

      if (vacaMayor < diasProduccion[a][b]) {
        vacaMayor = diasProduccion[a][b];
        numVacaMayor = b;
      }
    }

    document.write(
      "Producción total día " + dias[a] + " es: " + totalPd + "<br>"
    );

    if (diaMayorProd < totalPd) {
      diaMayorProd = totalPd;
      numDiaMp = dias[a];
    }

    if (totalPd < diaMenorProd) {
      diaMenorProd = totalPd;
      numDiaMep = dias[a];
    }

    vacas.innerHTML += "<td>" + numVacaMayor + "</td>";
  }

  document.write("Mayor producción día: " + numDiaMp + "<br>");

  document.write("Menor producción día: " + numDiaMep + "<br>");
}

main();
