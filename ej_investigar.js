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


/*Definir una función llamada obtenerRecetaPorIngredientes que funcione igual, pero el
segundo parámetro, en vez de ser el nombre de un ingrediente, que sea una lista de
ingredientes. Debe devolver todas las recetas que puedan hacerse con esos
ingredientes.*/

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

let ingredientesLista = ['carne', 'Ajo']


function obtenerRecetaPorIngredientes(listaComida, listaIngredientes) {
  comidasEncontradas = []
  ingredientes = []

  for (i = 0; i < ingredientesLista.length; i++) {
    ingredientes.push(ingredientesLista[i])
  }

  for (i = 0; i < comidas.Object.ingredientes.length; i++) {
    comidasEncontradas.push(comidas[i])
  }

  if (comidasEncontradas.includes(ingredientes[i])) {

  return comidasEncontradas
  }
}

console.log(obtenerRecetaPorIngredientes(comidas, ingredientesLista))