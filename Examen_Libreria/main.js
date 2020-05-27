/*
Por cada libro se anota su título, su autor, su año de lanzamiento, su editorial y su ISBN
(International Standard Book Number).
Estos libros se exhiben en una planilla y los lectores pueden alquilarlos, siempre
indicando su ISBN (el código que los identifica).


1 Consigna
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
      Fijarse si ese libro encontrado está o no alquilado y devolverme como resultado si el 
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


/*
2 Consigna:
La precisión de las recomendaciones de los administradores de la librería no es del todo
buena debido a la cantidad de libros que tienen, por lo que muchas veces los lectores no
pueden dar con los libros que buscan de su autor preferido.

Ayudemoslos dándoles una herramienta en la que puedan buscar qué libros están
disponibles sobre un autor determinador.

  0:
  Necesito encontrar en mi registro de libros todos los libros disponibles del autor que se busca.

  1:
  Debo hojear todo el cuaderno donde registro los libros e ir separando en una pila todos aquellos
  que pertenezcan al autor buscado y que estén disponibles.
     Cuando termino de recorrer todo mi cuaderno ya tendré la pila de libros disponibles de ese autor
     para mostrarle al cliente el resultado obtenido.

  2:
  Debo crear una función que a partir del autor solicitado recorra todo mi registro de libros se fije en 
  la propiedad AUTOR para ir individualizando y apilando todos los libros de ese autor en una Variable Array y 
  en la propiedad que me indica si está o no alquilado.
    
      Si al chequear un libro es del autor buscado y su estado es NO alquilado lo agrego a la lista.

    Si la lista que armé quedó vacía
       aviso que no encontré resultados para esa búsqueda.

    Sino Termino mosrtándo cómo quedó formada esta lista de libros de ese autor y disponibles.

  3:
  Creo una función que reciba de de parámetros una listaDeLibros y un Autor.

  Inicializo un Array para juntar los libros disponibles del autor buscado.

  Recorro mi lista de libros uno a uno (for)
    Si el libro que estoy mirando es del Autor buscado && su propiedad 'alquilado' es FALSE (if):
      lo agrego al Array de libros disponibles del autor buscado con su 'titulo' y 'autor'.

  Cuando termino de reccorrer mi lista de libros:
      Si la lista que creé de libros disponibles del autor buscado está vacía (if)
        respondo que no hay libros del autor buscado (return)

  Muestro el resultado obtenido del Array lista de libros disponibles del autor buscado. (return)
*/

function librosDisponiblesPorAutor(listaDeLibros, autor) {
  let librosAutor = []

  for (let i = 0; i < listaDeLibros.length; i++) {
    const libro = listaDeLibros[i]

    if (libro.autor === autor && libro.alquilado === false) {
      librosAutor.push({
        autor: libro.autor,
        titulo: libro.titulo,
      })
    }
  }

  if (librosAutor.length === 0) {
    return 'No hay libros disponibles del Autor ' + autor
  }

  return librosAutor
}


/*
3 Consigna
Sería una buena idea saber cuáles son los 10 libros que más se piden para decirles a los
administradores que encarguen más stock de los mismos.
¿Qué podemos ofrecerles para esto?

  0:
  Der mi cuaderno lista de libros debo obtener los 10 libros mas pesidos en un top 10.

  1:
  Debo hojear mi cuaderno donde tengo registrados mis libros y fijarme en cada uno cuantas veces
  fue pedido.
    A cada libro que reviso lo voy juntando en una pila donde veo el título, el autor y la cantidad de veces
    que fue pedido.

    Luego ordeno la pila de mayor a menor de acuerdo a la cantidad de veces que fueron pedidos.

      De esa pila ordenada tomo los 10 primeros libros de la lista.

  2:
  Necesito una función que reciba la información del registro que llevo de libros y cree una lista
  de libros ordenados segùn la cantidad de veces que fueron pedidos.
    Tengo que recorrer cada libro de mi registro para poder acceder a la cantidad de veces 
    que fue pedido y agregarlo a mi lista.

  Agarro la lista que fui llenando y la ordeno de mayor a menor según los pedidos.
    Tomo los 10 primeros de la lista que son los más pedidos.

  Muestro el resultado obtenido.

  3:
  Creo una función que recibe como parámetro una lista de libros.
    Inicializo una lista de los libros que voy recorriendo.
      Recorro mi lista de libros (for)
        Lo guardo en mi lista creado con los datos Autor, Título y cantidad de veces pedido.(push)

    Tomo la lista creada y la ordeno de mayor a menor (sort) y la guardo en una lista ordenada.
      Agarro la lista ordenada y extraigo los 10 primeros índices de objetos con los datos Autor,
      Título y cantidad de pedidos (slice) y lo guardo en una lista final.

    Devuelvo como resultado la lista de 10 libros ordenada de mayor a menor. (return)

*/

function librosMasBuscados(listaDeLibros) {
  const librosPedidos = []

  for (let i = 0; i < listaDeLibros.length; i++) {
    const libro = listaDeLibros[i]

    librosPedidos.push({
      autor: libro.autor,
      titulo: libro.titulo,
      pedidos: libro.cantidadPedidos,
    })
  }

  let librosMasPedidos = librosPedidos.sort(function (a, b){
    return (b.pedidos - a.pedidos)
  })

  librosMasPedidos = librosMasPedidos.slice(0, 10)

  return librosMasPedidos
}