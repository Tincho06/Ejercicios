function obtenerGastadoPorCliente(cliente) {
  let duracionesDeGrabaciones = 0

  for (let j = 0; j < cliente.grabaciones.length; j++) {
    const grabacion = cliente.grabaciones[j]

    duracionesDeGrabaciones += grabacion.duracion
  }

  return duracionesDeGrabaciones * VALOR_POR_HORA
}

function obtenerFechaABuscar(mes, anio) {
  if (mes > 9) {
    return mes + '/' + anio
  }

  return '0' + mes + '/' + anio
}

function obtenerFechasEn(fechas, mes, anio) {
  const fechasEncontradas = []

  for (let i = 0; i < fechas.length; i++) {
    const fecha = fechas[i]

    const aBuscar = obtenerFechaABuscar(mes, anio)

    if (fecha.includes(aBuscar)) {
      fechasEncontradas.push(fecha)
    }
  }

  return fechasEncontradas
}

console.log(obtenerFechaABuscar('04', '2020'))