/*Definir una función llamada obtenerRecetaPorIngrediente que reciba dos parámetros: el
primero, una lista de comidas (un objeto con nombre y lista de ingredientes), y el
segundo, el nombre de un ingrediente. Debe devolver todas las recetas que puedan
hacerse con este ingrediente.*/

let comidas = [
  {
    nombre: 'Empanadas',
    ingredientes: ['Carne', 'Cebolla', 'Verdeo', 'Ajo', 'Sal', 'Comino']
  },
  {
    nombre: 'Canelones',
    ingredientes: ['Espinaca', 'Ricota', 'Nuez', 'Tomate', 'Sal', 'Queso']
  },
  {
    nombre: 'Asado',
    ingredientes: ['Carne','Sal']
  },
  {
    nombre: 'Milanesas',
    ingredientes: ['Carne', 'Huevo', 'Pan rallado', 'Ajo', 'Sal']
  },
]


function obtenerRecetaPorIngrediente(listaComida, ingrediente) {
  comidasEncontradas = []
  for (i = 0; i < comidas.length; i++) {
    if (comidas[i].ingredientes.includes(ingrediente)) {
    comidasEncontradas.push(comidas[i])
  }
  }
  return comidasEncontradas
}

console.log(obtenerRecetaPorIngrediente(comidas, 'Sal'))
console.log(obtenerRecetaPorIngrediente(comidas, 'Comino'))
console.log(obtenerRecetaPorIngrediente(comidas, 'Ajo'))