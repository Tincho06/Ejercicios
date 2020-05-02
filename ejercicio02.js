//Ejercicios 2 y 3
function calcularAreaRectangulo(b, h) {
  resultado = b * h

  return resultado
}
console.log(calcularAreaRectangulo(5,10))

//////////////////////////////////////

function calcularPrecioTotal(precioUnitario, cantidadUnidades, costoEnvio) {
  precioAbonarCliente = (precioUnitario * cantidadUnidades) + costoEnvio

  return precioAbonarCliente
}
console.log(calcularPrecioTotal(10,5,8))

//////////////////////////////////////-1

function dejarPasar(edad) {
  if (edad >= 18) {
    return true
  } else {return false}
}
console.log(dejarPasar(15))

//////////////////////////////////////-2

function dejarPasar(edad) {
  const pasa = edad >= 18
  
  return pasa
}
console.log(dejarPasar(15))