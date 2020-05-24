/*Por cada libro se anota su título, su autor, su año de lanzamiento, su editorial y su ISBN
(International Standard Book Number).
Estos libros se exhiben en una planilla y los lectores pueden alquilarlos, siempre
indicando su ISBN (el código que los identifica).*/

const listaDeLibros = [
  {
    titulo:'El corazón de la piedra', //string nombre de la obra.
    autor:'José María García López', //string nombre del autor.
    anio:'2013', //string año de lanzamiento.
    editorial:'Nocturna', //string nombre de la Editorial.
    isbn: 9788493975074, //integer código ISBN que identifica al libro.
    alquilado: true, // boolean que indica si està alquilado (true) o no (false).
    cantidadPedidos: 15, //integer con la cantidad de veces que fue alquilado.
  },
  {
    titulo:'Salmos de vísperas', //string nombre de la obra.
    autor:'Esteban Hernández Castelló', //string nombre del autor.
    anio:'2003', //string año de lanzamiento.
    editorial:'Obra social de Caja de Avila', //string nombre de la Editorial.
    isbn: 849329148, //integer código ISBN que identifica al libro.
    alquilado: false, // boolean que indica si està alquilado (true) o no (false).
    cantidadPedidos: 10, //integer con la cantidad de veces que fue alquilado.
  }
]


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
libroBuscado(listaDeLibros, 849329148)