//Ejercicios 1 y 3

//Crear objeto
let miComidaPreferida = {
  nombre: 'Empanadas',
  cantidadDeVecesQueComi: 195,
  cantidadDeVecesQueMeCocinaron: 100,
  ingredientes: ['carne', 'cebolla', 'verdeo', 'huevo duro', 'comino', 'pimentón', 'aji', 'sal']
}

//Agregar propiedad boolean
miComidaPreferida.llevaMasDeCincoIngredientes = miComidaPreferida.ingredientes.length > 5

//Calcular cuàntas veces me cociné
miComidaPreferida.cantidadDeVecesQueMeCocine = miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron

console.log(miComidaPreferida.nombre)

alert(miComidaPreferida.nombre + ' de ' + miComidaPreferida.ingredientes)