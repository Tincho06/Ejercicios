/*Consigna:
  Crear una aplicación web que inicialmente muestre una mesa vacía. Utilizando el tablero
  de control (un botón de agregar y uno de borrar) se podrán agregar, de a una, las sillas
  que rodean la mesa. La mesa soporta hasta 8 sillas.

Maquetar HTML y CSS donde se muestre una mesa vacía y 2 botones, uno para agregar sillas de a 1
y otro para quitar sillas de a 1.

  1: Maqueta HTML:
    - Creo un panel de control para los botonos + y -, y les asigno una clase a cada uno
    - creo un div contenedor para el conjunto completo de mesas y sillas.
      - creo un div superior para la fila superior de sillas y le asigno una clase.
        - creo 3 divs para las 3 sillas superiores.
      - creo un div central que contenga la silla de la cabecera izquierda, la mesa y la 
      silla de la cabecera derecha:
        - creo 1 div para la cabecera izquierda.
        - creo 1 div para la mesa.
        - creo 1 div para la cabecera derecha.
      - creo un div inferior para la fila inferior de sillas y le asigno una clase.
        - creo 3 divs para las 3 sillas inferiores.
  
  2: Crear una aplicación que, luego de cargar el DOM, cargue 2 funciones:
     - Una función para agragar sillas hasta un máximo de 8 sillas.
     - Una función para quitar sillas.

  3: Al cargar el DOM debo traer y cargar en respectivas variables:
    - El boton +
    - el boton -
    - el div de la fila superior de sillas (entran 3 sillas)
    - el div de la cabecera izquierda (entra 1 silla)
    - el div de la cabecera derecha (entra 1 silla)
    - el div de la fila inferior de sillas. (entran 3 sillas)

    - Debo crear una función para agregar sillas, hasta 8 sillas.
    - Debo crear una función para eliminar sillas.

  4: Agregar (hasta 8) y quitar sillas:
    
    - Inicializo una variable contadora de sillas en 0 (arranco sin sillas).

    AGREGAR
    - Si hago click en el boton + ejecuto la función de agregar sillas:
      - Si tengo menos de 3 sillas:
        - creo un nuevo elemento de imagen 'silla'
        - le incorporo como contenido la imagen de la silla
        - le agrego una clase que la identifique en la fila de arriba.
        - le agrego estilos.
        - Selecciono la fila superior de mi maqueta
        - le agrego el nuevo elemento creado.

      - Si tengo 3 sillas:
        - creo un nuevo elemento de imagen 'silla'
        - le incorporo como contenido la imagen de la silla
        - le agrego una clase que la identifique en la cabecera izquierda.
        - le agrego estilos.
        - Selecciono la cabecera izquierda de mi maqueta
        - le agrego el nuevo elemento creado.

      - Si tengo 4 sillas:
        - creo un nuevo elemento de imagen 'silla'
        - le incorporo como contenido la imagen de la silla
        - le agrego una clase que la identifique en la cabecera derecha.
        - le agrego estilos.
        - Selecciono la cabecera derecha de mi maqueta
        - le agrego el nuevo elemento creado.

      - Si tengo mas de 4 pero menos de 8 sillas:
        - creo un nuevo elemento de imagen 'silla'
        - le incorporo como contenido la imagen de la silla
        - le agrego una clase que la identifique en la fila de abajo.
        - le agrego estilos.
        - Selecciono la fila de abajo de mi maqueta
        - le agrego el nuevo elemento creado.

      - Si mi variable contador aún no llegó a 8, le sumo 1 elemento.

    QUITAR
    - Si hago click en el boton - ejecuto la función de quitar sillas:
      - Si tengo 3 sillas o menos:
        - selecciono un elemento que tenga la clase que identifica a las sillas de arriba.
        - remuevo el elemento que contiene.

      - Si tengo 4 sillas:
        - selecciono un elemento que tenga la clase que identifica a la silla de cabecera izquierda.
        - remuevo el elemento que contiene.

      - Si tengo 5 sillas:
        - selecciono un elemento que tenga la clase que identifica a la silla de cabecera derecha.
        - remuevo el elemento que contiene.

      - Si tengo más de 5 sillas y menos de 9:
        - selecciono un elemento que tenga la clase que identifica a las sillas de abajo.
        - remuevo el elemento que contiene.

      Le resto un elemento a mi variable contador.*/

window.onload = function() {
  
  const sillasArriba = document.querySelector('.superior')
  const sillasAbajo = document.querySelector('.inferior')
  const cabeceraIzquierda = document.querySelector('.cabecera_izq')
  const cabeceraDerecha = document.querySelector('.cabecera_der')
  const botonMas = document.querySelector('.mas')
  const botonMenos = document.querySelector('.menos')

  let cantidadDeSillas = 0

  botonMas.onclick = function() {
    
    if (cantidadDeSillas < 3) {

      const nuevaSilla = document.createElement('img')
      nuevaSilla.setAttribute('src', 'img/silla.png')
      nuevaSilla.classList.add('silla_arriba')
      nuevaSilla.style = "margin: 10px"

      const sillasArriba = document.querySelector('.superior')
      sillasArriba.append(nuevaSilla)

    } else if (cantidadDeSillas === 3) {

      const nuevaSilla = document.createElement('img')
      nuevaSilla.setAttribute('src', 'img/silla.png')
      nuevaSilla.classList.add('silla_izq')
      nuevaSilla.style = "transform: rotate(-90deg); margin: 10px"

      const cabeceraIzquierda = document.querySelector('.cabecera_izq')
      cabeceraIzquierda.append(nuevaSilla)

    } else if (cantidadDeSillas === 4) {

      const nuevaSilla = document.createElement('img')
      nuevaSilla.setAttribute('src', 'img/silla.png')
      nuevaSilla.classList.add('silla_der')
      nuevaSilla.style = "transform: rotate(90deg); margin: 10px"

      const cabeceraDerecha = document.querySelector('.cabecera_der')
      cabeceraDerecha.append(nuevaSilla)

    } else if (cantidadDeSillas > 4 && cantidadDeSillas < 8) {

      const nuevaSilla = document.createElement('img')
      nuevaSilla.setAttribute('src', 'img/silla.png')
      nuevaSilla.classList.add('silla_abajo')
      nuevaSilla.style = "transform: rotate(180deg); margin: 10px"

      const sillasAbajo = document.querySelector('.inferior')
      sillasAbajo.append(nuevaSilla)
    }

    if (cantidadDeSillas < 8) {
      cantidadDeSillas = cantidadDeSillas + 1
    }
  }

  botonMenos.onclick = function() {
    
    if (cantidadDeSillas <= 3) {
      const quitarSilla = document.querySelector('.silla_arriba')
      quitarSilla.parentNode.removeChild(quitarSilla)
    } else if (cantidadDeSillas === 4) {
      const quitarSilla = document.querySelector('.silla_izq')
      quitarSilla.parentNode.removeChild(quitarSilla)
    } else if (cantidadDeSillas === 5) {
      const quitarSilla = document.querySelector('.silla_der')
      quitarSilla.parentNode.removeChild(quitarSilla)
    } else if (cantidadDeSillas > 5 && cantidadDeSillas < 9) {
      const quitarSilla = document.querySelector('.silla_abajo')
      quitarSilla.parentNode.removeChild(quitarSilla)
    
    } 
    cantidadDeSillas = cantidadDeSillas - 1
  }
}