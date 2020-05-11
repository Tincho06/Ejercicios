//Clientes

listaClientes = [
  {
    nombreBanda: 'aaaa',
    telefono: 123456,
    sesiones: [
      1 = {
        fecha: 01/01/2020,
        ingreso: 15:50,
        salida: 17:30,
        duracion: salida - ingreso,
      }
    ]
    pagos: [
      {
        fecha: 01/01/2020,
        monto: 150,
      }

    ]
  },
  {
    nombreBanda: 'bbbb',
    telefono: 123456,
    sesiones: [
      1 = {
        fecha: 05/01/2020,
        ingreso: 18:30,
        salida: 19:30,
        duracion: salida - ingreso,
      }
    ]
    pagos: [
      {
        fecha: 06/01/2020,
        monto: 100,
      }

    ]
  }
]


function cargaCliente() {
  const cliente = prompt('Nombre de Banda', '')
  if (cliente != null) {
    document.querySelector('.confirma').innerHTML = 'La banda ' + cliente + 'fue cargada'
  }
}

function controlSemanal(duraciónSesiones, montoPagos, cliente) {
  const valorHora = 100
  let saldo = duraciónSesiones / 60 * 100 - montoPagos
  if (saldo > 0) {
    console.log('Llamar a cliente ' + cliente + ', debe $' + saldo)
  }
}