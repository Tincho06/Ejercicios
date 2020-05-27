/*Por cada libro se anota su título, su autor, su año de lanzamiento, su editorial y su ISBN
(International Standard Book Number).
Estos libros se exhiben en una planilla y los lectores pueden alquilarlos, siempre
indicando su ISBN (el código que los identifica).*/

const listaDeLibros = [
  {
    titulo:'Cuentos completos', //string nombre de la obra.
    autor:'Jorge Luis Borges', //string nombre del autor.
    anio:'2013', //string año de lanzamiento.
    editorial:'DEBOLSILLO', //string nombre de la Editorial.
    isbn: 9788499891620, //integer código ISBN que identifica al libro.
    alquilado: true, // boolean que indica si està alquilado (true) o no (false).
    cantidadPedidos: 35, //integer con la cantidad de veces que fue alquilado.
  },
  {
    titulo:'Ficciones',
    autor:'Jorge Luis Borges',
    anio:'2018',
    editorial:'DEBOLSILLO',
    isbn: 9788493975074,
    alquilado: false,
    cantidadPedidos: 8,
  },
  {
    titulo:'El Aleph',
    autor:'Jorge Luis Borges',
    anio:'2019',
    editorial:'DEBOLSILLO',
    isbn: 9788426406392,
    alquilado: false,
    cantidadPedidos: 20,
  },
  {
    titulo:'El Tunel',
    autor:'Ernesto Sábato',
    anio:'2006',
    editorial:'Ediciones Cátedra',
    isbn: 9788437600895,
    alquilado: true,
    cantidadPedidos: 41,
  },
  {
    titulo:'Sobre héroes y tumbas',
    autor:'Ernesto Sábato',
    anio:'2003',
    editorial:'Austral',
    isbn: 9788432248337,
    alquilado: false,
    cantidadPedidos: 32,
  },
  {
    titulo:'Antes del fin',
    autor:'Ernesto Sábato',
    anio:'2002',
    editorial:'Austral',
    isbn: 9788432248344,
    alquilado: false,
    cantidadPedidos: 22,
  },
  {
    titulo:'El corazón de la piedra',
    autor:'José María García López',
    anio:'2013',
    editorial:'Nocturna',
    isbn: 9788493975074,
    alquilado: true,
    cantidadPedidos: 15,
  },
  {
    titulo:'Salmos de vísperas',
    autor:'Esteban Hernández Castelló',
    anio:'2003',
    editorial:'Obra social de Caja de Avila',
    isbn: 849329148,
    alquilado: false,
    cantidadPedidos: 3,
  },
  {
    titulo:'Sarasasa',
    autor:'Esteban Hernández Castelló',
    anio:'2003',
    editorial:'Obra social de Caja de Avila',
    isbn: 12345678,
    alquilado: false,
    cantidadPedidos: 7,
  },
  {
    titulo:'Ensayo sobre la ceguera',
    autor:'José Saramago',
    anio:'2015',
    editorial:'DEBOLSILLO',
    isbn: 9788490628720,
    alquilado: false,
    cantidadPedidos: 58,
  },
  {
    titulo:'El cuaderno del año del Nobel',
    autor:'José Saramago',
    anio:'2018',
    editorial:'DEBOLSILLO',
    isbn: 9788420434599,
    alquilado: false,
    cantidadPedidos: 38,
  },
  {
    titulo:'La caverna',
    autor:'José Saramago',
    anio:'2015',
    editorial:'DEBOLSILLO',
    isbn: 9788490628744,
    alquilado: true,
    cantidadPedidos: 41,
  },
]

// Libro buscado por ISBN
libroBuscado(listaDeLibros, 9788437600895)

//Libros disponibles de un autor determinado
librosDisponiblesPorAutor(listaDeLibros, 'Ernesto Sábato')

//Top 10 libros mas buscados
librosMasBuscados(listaDeLibros)