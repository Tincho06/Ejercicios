//ejercicio04

///if Calcular resultado de examen

function calcularResultadoDeExamen(notaExamen) {
  
    if (notaExamen < 4) {
      return 'aplazado'
    } else if (notaExamen >= 4 && notaExamen <= 6) {
      return 'a recuperar'
    } else if (notaExamen > 6 && notaExamen < 10) {
      return 'aprobado'
    } else {return 'sobresaliente'}
  
}

console.log(calcularResultadoDeExamen(2))
console.log(calcularResultadoDeExamen(4))
console.log(calcularResultadoDeExamen(5))
console.log(calcularResultadoDeExamen(6))
console.log(calcularResultadoDeExamen(8))
console.log(calcularResultadoDeExamen(10))

//Funciòn para determinar si son hermanos

function sonHermanos(objeto1, objeto2) {
  if (objeto1.padre === objeto2.padre && objeto1.madre === objeto2.madre) {
    return true
  } else {
    return false
  }
}

const sujeto1 = {
  nombre: 'Pedro',
  madre: 'María',
  padre: 'Juan',
}

const sujeto2 = {
  nombre: 'José',
  madre: 'María',
  padre: 'Juan',
}

console.log(sonHermanos(sujeto1, sujeto2))