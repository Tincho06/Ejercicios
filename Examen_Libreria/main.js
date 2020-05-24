/*
Por cada libro se anota su título, su autor, su año de lanzamiento, su editorial y su ISBN
(International Standard Book Number).
Estos libros se exhiben en una planilla y los lectores pueden alquilarlos, siempre
indicando su ISBN (el código que los identifica).

Creemos un programa que le permita a los administradores de la librería comunitaria saber
si un libro en particular está o no disponible (es decir, si puede alquilarse o ya fue
alquilado previamente y estamos a la espera de su devolución)*/

  /*
  0:
    Frente a la búsqueda de un libro particular el administrador debe saber 
    si está o no disponible para quién lo busca.

  1: En el cuaderno donde registro las propiedades de cada libro 
    debo tener una propiedad dedicada a marcar si está alquilado o si está disponible.
    Para saber si un libro en particular está o no disponible debo hojear mi cuaderno
    hasta encontrar el libro identificado con el Nro de ISBN que lo individualiza y
    chequear la anotación en su situación de alquilado o disponible. Según esta situación o estado
    respondo al solicitante si está o no disponible es libro que me pide.

  2: Debo crear una función que reciba una lista de objetos libros y que reciba un
    nro. de ISBN que identifica al libro que se busca por el cliente.
    Esa función debe recorrer esa lista de libros hasta encontrar el libro buscado,
    sijarsi ese libro encontrado está o no alquilado y devolverme como resultado si el 
    libro del ISBN ingresado, que tiene un Nombre determinado y es de un autor determinado
    está alquilado o si está disponible.

  3: Creo una función libroBuscado que recibe de parámetros una listaDeLibros y un ISBN
  indicado por el cliente.
    Debo recorrer la listaDeLibros (for) para individualizar cada libro [i]
      Si en el recorrido encuetro el libro que tiene el ISBN que busco (if)
      chequeo la condición de si está alquilado (true o false)
        Si es True (está alquilado) devuelvo el mensaje: 
        'isbn, libro.nombre, libro.autor no está disponible ahora'

        Si es False (no está alquilado) devuelvo el mensaje:
        'isbn, libro.nombre, libro.autor está disponible ahora'
  */

function libroBuscado(listaDeLibros, isbn) {
  
  for (let i = 0; i < listaDeLibros.length; i++) {
    const libro = listaDeLibros[i]

    if (libro.isbn === isbn) {
      if (libro.alquilado === true) {
        return 'El libro ' + libro.titulo + ' de ' + libro.autor + ' está alquilado'
      } else {
      return 'El libro ' + libro.titulo + ' de ' + libro.autor + ' está disponible'
      }
    }
  }
  return 'Libro no encontrado'
}