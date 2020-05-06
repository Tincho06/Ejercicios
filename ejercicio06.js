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


/*2. Definir una función multiplicar que reciba como parámetro una lista de números y
devuelva el resultado de la multiplicación de estos números.*/


function multiplicar(listaNumeros) {
  resultado = 1

  for (let i = 0; i < listaNumeros.length; i++) {
    resultado = resultado * listaNumeros[i]
  }
  return resultado
}

console.log(multiplicar([5, 3, 10]))


/*3. Definir una función calcularPromedio que reciba como parámetro una lista de números y
devuelva el promedio de estos números.*/

function calcularPromedio(listaNumeros) {
  resultado = 0
  promedio = 0.0

  for (let i = 0; i < listaNumeros.length; i++) {
    resultado = resultado + listaNumeros[i]
    promedio = resultado / listaNumeros.length
  }
  return promedio
}

console.log(calcularPromedio([5, 3, 10]))