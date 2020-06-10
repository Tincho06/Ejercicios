/*Selecciono el input y el boton
Creo la caja contenedora del mensaje y la agrego al documento
creo el párrafo que contendrá el mensaje

Función que se ejecuta para chequear la edad ingresada.
  Condiciono la función a escuchar el evento de la tecla 'Enter'.
  Si el valor ingresado es menor a 18 pongo la caja en rojo y le doy un contenido al texto del mensaje.
  Si el valor ingresado es mayor o igual a 18 pongo la caja en verde y le doy un contenido al texto del mensaje.

Escucho el click en el boton y ejecuto la función.
Escucho la presion de tecla y ejecuto la función.*/

window.onload = function() {
  
  const input = document.querySelector('.age')
  const button = document.querySelector('.button')

  const aviso = document.createElement('div')
  aviso.classList.add('aviso')
  const avisoCreado = document.querySelector('body')
  avisoCreado.append(aviso)

  const textoCartel = document.createElement('p')
  textoCartel.style = "color: #fff; font-size: 20px; text-align: center"

  function chequearEdad(event) {

    if (input.value < 18) {
  
      aviso.style = "background-color: red; padding: 10px; width: 40%; margin-top: 15px; margin-left: 20px"

      textoCartel.innerHTML = 'Es menor de edad.'
      textoCartel.classList.add('texto_cartel')

      const mensaje = document.querySelector('.aviso')
      mensaje.append(textoCartel)

    } else if (input.value >= 18) {

      aviso.style = "background-color: green; padding: 10px; width: 40%; margin-top: 15px; margin-left: 20px"

      textoCartel.innerHTML = 'Bienvenido.'
      textoCartel.classList.add('texto_cartel')

      const mensaje = document.querySelector('.aviso')
      mensaje.append(textoCartel)
    }
  }


  button.onclick = function() {
    chequearEdad()
  }

  input.onkeydown = function() {
    if (event.key === 'Enter') {
    chequearEdad()
    }
  }
}