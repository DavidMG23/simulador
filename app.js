function calcularGanancias() {
  let gasto = document.getElementById("gasto").value
  let nivel2 = parseInt(document.getElementById("nivel2").value);
  let nivel3 = nivel2 * 3
  let nivel4 = nivel3 * 2
  let nivel5 = nivel4 * 2
  let nivel6 = nivel5 * 2

  document.getElementById("consumo1").value = gasto

  let inversionNivel2 = nivel2 * gasto;
  let gananciaN2 = Math.round(inversionNivel2 * 0.0021)
  document.getElementById("consumo2").value = inversionNivel2

  let inversionNivel3 = nivel3 * gasto;
  document.getElementById("nivel3").value = nivel3
  let gananciaN3 = Math.round(inversionNivel3 * 0.0021)
  document.getElementById("consumo2").value = inversionNivel3
  

  let inversionNivel4 = nivel4 * gasto;
  document.getElementById("nivel4").value = nivel4
  let gananciaN4 = Math.round(inversionNivel4 * 0.0021)
  document.getElementById("consumo4").value = inversionNivel4

  let inversionNivel5 = nivel5 * gasto;
  document.getElementById("nivel5").value = nivel5
  let gananciaN5 = Math.round(inversionNivel5 * 0.0021)
  document.getElementById("consumo5").value = inversionNivel5

  let inversionNivel6 = nivel6 * gasto;
  document.getElementById("nivel6").value = nivel6
  let gananciaN6 = Math.round(inversionNivel6 * 0.0021)
  document.getElementById("consumo6").value = inversionNivel6


  let gananciasConsumos = Math.round(gasto * 0.0021)
  let gananciasRed = gananciaN2 + gananciaN3 + gananciaN4 + gananciaN5 + gananciaN6
  let gananciaComercios = Math.round(((inversionNivel2 + inversionNivel3 + inversionNivel4 + inversionNivel5 + inversionNivel6) * 0.0003) + (gananciasConsumos * 0.01))
  let ingresosMensual = gananciasConsumos + gananciasRed + gananciaComercios

  document.getElementById("consumos").innerHTML = "$" + gananciasConsumos.toLocaleString();
  document.getElementById("redConsumidores").innerHTML = "$" + gananciasRed.toLocaleString();
  document.getElementById("comercios").innerHTML = "$" + gananciaComercios.toLocaleString();
  document.getElementById("ingresos").innerHTML = "$" + ingresosMensual.toLocaleString();
}

function limpiar() {
  document.getElementById("gasto").value = ""
  document.getElementById("nivel2").value = ""
  document.getElementById("nivel3").value = ""
  document.getElementById("nivel4").value = ""
  document.getElementById("nivel5").value = ""
  document.getElementById("nivel6").value = ""

  document.getElementById("consumo1").value = ""
  document.getElementById("consumo2").value = ""
  document.getElementById("consumo3").value = ""
  document.getElementById("consumo4").value = ""
  document.getElementById("consumo5").value = ""
  document.getElementById("consumo6").value = ""
  
  document.getElementById("consumos").value = ""
  document.getElementById("redConsumidores").value = ""
  document.getElementById("comercios").value = ""
  document.getElementById("ingresos").value = ""
}