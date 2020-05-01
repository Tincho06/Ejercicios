function calcularAreaRectangulo(b, h) {
  resultado = b * h

  return resultado
}

console.log(calcularAreaRectangulo(5,10))

function calcularPrecioTotal(precioUnitario, cantidadUnidades, costoEnvio) {
  precioAbonarCliente = (precioUnitario * cantidadUnidades) + costoEnvio

  return precioAbonarCliente
}

console.log(calcularPrecioTotal(10,5,8))