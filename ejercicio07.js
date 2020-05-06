/*1. Definir una función contarEspacios que reciba un texto y devuelva la cantidad de
espacios que tenga.*/

function contarEspacios(texto) {
  let miTextoEspacios = 0
  for (i = 0; i < texto.length; i++) {
    if (texto[i] === ' ') {
      miTextoEspacios = miTextoEspacios + 1

    }
  }
  return miTextoEspacios
}

console.log(contarEspacios('Mi texto tiene varios espacios.'))



/*2. Definir una función buscarTweets que reciba una lista de tweets (mensajes) y un texto a
buscar, y devuelva todos los tweets que contengan ese texto.*/

function buscarTweets(listaTweets, texto) {
  tweetsEncontrados = []
  for (let i = 0; i < listaTweets.length; i++) {
    if (listaTweets[i].includes(texto)) {
        tweetsEncontrados.push(listaTweets[i])
    }
  }
  return tweetsEncontrados
}

misTweets = [
  'Texto del cuerpo del tweet de cualquier cosa simulada en 280 caracteres o menos',
  'Otro tweet con una simulación de texto para buscar.',
  'En este caso escribo cualquier cosa para completar el ejercicio',
]

console.log(buscarTweets(misTweets, 'caso'))



/*3. Definir una función censurarTexto que reciba una frase y una lista de expresiones
censuradas y devuelva la frase reemplazando esas expresiones por astericos que tengan
su mismo tamaño.*/

function censurarTexto(frase, listaCensura) {
  for (let i = 0; i < listaCensura.length; i++) {
    Things[i]
  }
}