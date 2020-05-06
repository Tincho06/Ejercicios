/*Definir una función llamada obtenerRecetaPorIngrediente que reciba dos parámetros: el
primero, una lista de comidas (un objeto con nombre y lista de ingredientes), y el
segundo, el nombre de un ingrediente. Debe devolver todas las recetas que puedan
hacerse con este ingrediente.*/

function obtenerRecetaPorIngrediente(listaComidas, ingrediente) {
  const comidasEncontradas = []

  for (let i = 0; i < listaComidas.length; i++) {
    const receta = listaComidas[i]

    for (let j = 0; j < receta.ingredientes.length; j++) {
      const ingredienteDeReceta = receta.ingredientes[j]

      if (ingredienteDeReceta === ingrediente) {          
        comidasEncontradas.push(receta)
      }
    }
  }
  return comidasEncontradas
  }
  

const comidas = [
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

/*if (listaComidas[i].ingredientes.includes(ingrediente)) {
    comidasEncontradas.push(listaComidas[i])*/

console.log(obtenerRecetaPorIngrediente(comidas, 'Sal'))
console.log(obtenerRecetaPorIngrediente(comidas, 'Comino'))
console.log(obtenerRecetaPorIngrediente(comidas, 'Ajo'))



/*Definir una función llamada obtenerRecetaPorIngredientes que funcione igual, pero el
segundo parámetro, en vez de ser el nombre de un ingrediente, que sea una lista de
ingredientes. Debe devolver todas las recetas que puedan hacerse con esos
ingredientes.*/


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



console.log(obtenerRecetaPorIngredientes(comidas, ingredientesLista))