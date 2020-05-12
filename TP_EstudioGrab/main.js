//Clientes

Clientes = [
  {
    nombreBanda: 'Moco de cuarentena',
    telefono: '123456987',
    sesiones: [
      {
        fecha: '01/01/2020',
        duracion: 1,
      },
      {
        fecha: '06/01/2020',
        duracion: 2,
      }
    ],
    pagos: [
      {
        fecha: '01/01/2020',
        monto: 150,
      }
    ]
  },
  {
    nombreBanda: 'Bigotes con Nesquick',
    telefono: '25896300',
    sesiones: [
      {
        fecha: '15/04/2020',
        duracion: 2,
      },
      {
        fecha: '26/04/2020',
        duracion: 3,
      }
    ],
    pagos: [
      {
        fecha: '20/04/2020',
        monto: 100,
      }
    ]
  },
  {
    nombreBanda: 'La de cajú ya la pagué',
    telefono: '0303456',
    sesiones: [
      {
        fecha: '10/03/2020',
        duracion: 2,
      },
      {
        fecha: '15/04/2020',
        duracion: 3,
      }
    ],
    pagos: [
      {
        fecha: '15/04/2020',
        monto: 100,
      }
    ]
  }
]
//console.log(listaClientes)


const VALOR_POR_HORA = 100

function controlSemanal(listaClientes) {
  
  /*Recibe una lista de clientes y devuelve una lista de deudores
    Un deudor tiene: nombre, teléfono y monto a pagar.
    por cada cliente fijarse si debe algo.
      un cliente debe algo cuando lo que pago es menor a lo que pagó.

      lo que gastó: es la suma de la duración de sus grabaciones
      lo que pagó: es la suma de los montos que pagó.
  */

  const deudores = []

  for (let i = 0; i < listaClientes.length; i++) {
    cliente = listaClientes[i]

    let duracionDeSesiones = 0

    for (let j = 0; j < cliente.sesiones.length; j++) {
      const sesion = cliente.sesiones[i]

      duracionDeSesiones += sesion.duracion
    }

    const gastadoPoElCliente = duracionDeSesiones * VALOR_POR_HORA

    let montosPagados = 0

    for (j = 0; j < cliente.pagos.length; j++) {
      const pago = cliente.pagos[j]

      montosPagados += pago.monto
    }

    

    const pagosDelCliente =
  }

  return deudores
}

console.log(controlSemanal(90, 100, 'aaaa'))