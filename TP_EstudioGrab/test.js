/*
clientes: lista de cliente
  - nombre
  - telefono
  - grabaciones: lista de grabacion
    - fecha
    - duracion
  - pagos: lista de pago
    - fecha
    - monto
*/

const misClientes = [
  {
    nombreBanda: 'Moco de cuarentena',
    telefono: '123456987',
    grabaciones: [
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
    grabaciones: [
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
    grabaciones: [
      {
        fecha: '10/03/2020',
        duracion: 3,
      },
      {
        fecha: '15/04/2020',
        duracion: 3,
      }
    ],
    pagos: [
      {
        fecha: '15/04/2020',
        monto: 200,
      }
    ]
  },
  {
    nombreBanda: 'Los misterios de Git',
    telefono: '0303456',
    grabaciones: [
      {
        fecha: '10/03/2020',
        duracion: 5,
      },
      {
        fecha: '15/04/2020',
        duracion: 3,
      }
    ],
    pagos: [
      {
        fecha: '15/04/2020',
        monto: 300,
      }
    ]
  },
  {
    nombreBanda: '0000',
    telefono: '0303456',
    grabaciones: [
      {
        fecha: '10/03/2020',
        duracion: 1,
      },
      {
        fecha: '15/04/2020',
        duracion: 6,
      }
    ],
    pagos: [
      {
        fecha: '15/04/2020',
        monto: 300,
      }
    ]
  },
  {
    nombreBanda: 'pi al cuadrado',
    telefono: '0303456',
    grabaciones: [
      {
        fecha: '10/03/2020',
        duracion: 2,
      },
      {
        fecha: '15/04/2020',
        duracion: 2,
      }
    ],
    pagos: [
      {
        fecha: '15/04/2020',
        monto: 300,
      }
    ]
  },
]

//4
function predecirGrabacionesDeSemanaQueViene(clientes, mes, anio) {
  
  let grabacionesEnFechaBuscada = 0

  for (let i = 0; i < clientes.length; i++) {
    const cliente = clientes[i]

    for (var j = 0; j < cliente.grabaciones.length; j++) {
      const grabacion = cliente.grabaciones[j]

      if (grabacion.fecha.includes(mes + '/' + anio)) {
        grabacionesEnFechaBuscada += grabacion.duracion
      }
    }
  }

  let promedioSemanal = grabacionesEnFechaBuscada / 30 * 7

  return promedioSemanal
}

console.log(predecirGrabacionesDeSemanaQueViene(misClientes, '04', '2020'))

//const misDeudores = controlSemanal(misClientes)

//const misMejoresClientes = obtenerMejoresClientes(misClientes)