const VALOR_POR_HORA = 100

function controlSemanal(clientes) {
  
  /*Recibe una lista de clientes y devuelve una lista de deudores
    Un deudor tiene: nombre, teléfono y monto a pagar.
    por cada cliente fijarse si debe algo.
      un cliente debe algo cuando lo que pago es menor a lo que pagó.

      lo que gastó: es la suma de la duración de sus grabaciones
      lo que pagó: es la suma de los montos que pagó.
  */

  const deudores = []

  for (let i = 0; i < clientes.length; i++) {
    const cliente = clientes[i]

    const gastadoDeCliente = obtenerGastadoPorCliente(cliente)

    let pagadoDeCliente = 0

    for (j = 0; j < cliente.pagos.length; j++) {
      const pago = cliente.pagos[j]

      pagadoDeCliente += pago.monto
    }
    
    const deudaDeCliente = gastadoDeCliente - pagadoDeCliente

    if (deudaDeCliente > 0) {
      deudores.push({
        nombre: cliente.nombreBanda,
        telefono: cliente.telefono,
        monto: deudaDeCliente,
      })
    }
  }

  return deudores
}


/*Ahora propongo que los ayudemos a analizar su negocio. Los vamos a ayudar a hacer
algo que con la carpeta en papel no pueden hacer (o al menos les costaría mucho).
Intentemos saber quiénes son sus mejores 5 clientes, aquellos que más ingresos les
generaron.*/

function obtenerMejoresClientes(clientes) { 
  /*
    1. 
    recibe una lista de clientes y devuelve los mejores 5, aquellos que mas gastaron,
    siendo lo que gasto cada cliente, la sumatoria de las duraciones de sus grabaciones
    multiplicada por el valor por hora

    3.
    por cada cliente:
      calcular cuanto gastó

    ordenar los clientes segun cuanto gastaron de mayor a menor y devolver los primeros 5
  */

  const gastadoPorClientes = []

  for (let i = 0; i < clientes.length; i++) {
    cliente = clientes[i]

    gastadoPorClientes.push({
      nombre: cliente.nombre,
      montoGastado: obtenerGastadoPorCliente(cliente),
    })
  }

  /*
  falta ordenar la lista gastadoPorClientes segun la propiedad montoGastado,
  agarrar los primeros 5 y devolver sus nombres
  */

  gastadoPorClientes.sort(function (a, b){
    return b - a
  })

  mejoresClientes = gastadoPorClientes.slice(0, 5)

  return mejoresClientes
}


function obtenerFacturacionEn(clientes, mes, anio) {
  /*
    recibe una lista de clientes, un mes y un año y tiene que devolver la cantidad de plata
    que pagaron los clientes en ese mes y año.
  */

  /*
    definir variable facturacion en 0

    recorrer lista de clientes (for):
        ya tengo cada cliente, entonces

        recorro la lista de pagos de este cliente (for):
            ya tengo cada pago, entonces

            veo si la fecha de este pago coincide con la fecha del parametro (if):
                le sumo a la variable facturacion este monto

    retornar la variable facturacion
  */

  let facturacionEnFechaBuscada = 0

  for (let i = 0; i < clientes.length; i++) {
    const cliente = clientes[i]

    for (var j = 0; j < cliente.pagos.length; j++) {
      const pago = cliente.pagos[j]

      if (pago.fecha.includes()) {}
    }
  }
}

function predecirGrabacionesDeSemanaQueViene() {
  /*
  pensar...
  */
}