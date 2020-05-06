/*1. Definir una función duplicarNumeros que reciba como parámetro una lista de números y
devuelva la lista con esos números duplicados.*/

function duplicarNumeros(listaNumeros) {
  listaDuplicados = []
  for (let i = 0; i < listaNumeros.length; i++) {
    let duplicado = listaNumeros[i] * 2
    listaDuplicados.push(duplicado)
  }
  return listaDuplicados
}

numeros = [1,2,3,4]

console.log(duplicarNumeros(numeros))
