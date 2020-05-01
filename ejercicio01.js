let miComidaPreferida = {
  nombre: 'Empanadas',
  cantidadDeVecesQueComi: 195,
  cantidadDeVecesQueMeCocinaron: 100,
  ingredientes: ['carne', 'cebolla', 'verdeo', 'huevo duro', 'comino', 'pimentón', 'aji', 'sal']
}

miComidaPreferida.llevaMasDeCincoIngredientes = miComidaPreferida.ingredientes.length > 5

miComidaPreferida.cantidadDeVecesQueMeCocine = miComidaPreferida.cantidadDeVecesQueComi - miComidaPreferida.cantidadDeVecesQueMeCocinaron

console.log(miComidaPreferida)