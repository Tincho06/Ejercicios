/*
Crear una aplicación que tenga un círculo inicialmente rojo, un tablero de control con
cuatro flechas (arriba, izquierda, derecha y abajo) y una configuración de colores.

Mediante el tablero de control el círculo debe poder moverse hacia el lado que fue
indicado. Lo mismo debe suceder con las teclas: si aprieto la tecla derecha, el círculo debe
moverse hacia la derecha, si aprieto la izquierda, hacia la izquierda.

El color del círculo debe poder elegirse entre rojo, azul y verde.

Bonus points:
• ¿Qué pasa si el círculo llega a un extremo de la pantalla? Pensar cómo solucionar este
problema (si es que lo es) y programar la solución.
   - Cuando el cìrculo llega al lìmite de la pantalla debe desaparecer y reaparecer del lado opuesto.

• Agregar una opción para que el círculo se mueva solo aleatoriamente.

• Agregar otra opción para que el círculo se mueva diagonalmente y cambiar su rumbo
al chocarse con una pared.
 */

window.onload = function() {
  
  const container = document.querySelector('.container')
  const containerHeight = document.querySelector('.container').offsetHeight
  const containerWidth = document.querySelector('.container').offsetWidth
  //console.log(containerHeight)
  //console.log(containerWidth)

  const arrows = document.querySelectorAll('.arrow')

  const up = document.querySelector('.up')
  const left = document.querySelector('.left')
  const right = document.querySelector('.right')
  const down = document.querySelector('.down')

  const circle = document.querySelector('.circle')
  const circleHeight = document.querySelector('.circle').offsetHeight
  const circleWidth = document.querySelector('.circle').offsetWidth

  const red = document.querySelector('.red')
  const blue = document.querySelector('.blue')
  const green = document.querySelector('.green')

  const play = document.querySelector('.play')
  const pause = document.querySelector('.pause')

  function moveCircle(object) {
    const key = object.which

    const circleX = document.querySelector('.circle').offsetLeft
    const circleY = document.querySelector('.circle').offsetTop

    if (key === 37) {
      
      if (circleX < containerWidth && circleX > 0) { 
        circle.style.left = circleX-10+"px" 
        circle.classList.add('animacion')
      } else {
        circle.style.left = containerWidth - circleWidth+"px"
      }
    }

    if (key === 38) {
      
      if (circleY < containerHeight && circleY > 0) { 
        circle.style.top = circleY-10+"px" 
        circle.classList.add('animacion')
      } else {
        circle.style.top = containerHeight - circleHeight+"px"
      }
    }

    if (key === 39) {
      
      if (circleX <= containerWidth - circleWidth) { 
        circle.style.left = circleX+10+"px" 
        circle.classList.add('animacion')
      } else {
        circle.style.left = 0 +"px" //containerWidth - circleX+"px"
      }
    }

    if (key === 40) {
      
      if (circleY <= containerHeight - circleHeight) { 
        circle.style.top = circleY+10+"px" 
        circle.classList.add('animacion')
      } else {
        circle.style.top = 0 +"px" //containerHeight - circleY+"px"
      }
    }

  }

  //Mover con las flechas
  document.onkeydown = moveCircle

  //Mover con botón de pantalla UP
  up.onclick = function() {

    const circleY = document.querySelector('.circle').offsetTop
    
    if (circleY < containerHeight && circleY > 0) { 
      circle.style.top = circleY-10+"px" 
      circle.classList.add('animacion')
    } else {
      circle.style.top = containerHeight - circleHeight+"px"
    }
    

  }

  //Mover con botón de pantalla DOWN
  down.onclick = function() {

    const circleY = document.querySelector('.circle').offsetTop
      
    if (circleY < containerHeight - circleHeight) { 
        circle.style.top = circleY+10+"px" 
        circle.classList.add('animacion')
      } else {
        circle.style.top = 0 +"px" //containerHeight - circleY+"px"
      }
    
    
  }

  //Mover con botón de pantalla LEFT
  left.onclick = function() {

    const circleX = document.querySelector('.circle').offsetLeft
      
    if (circleX < containerWidth && circleX > 0) { 
      circle.style.left = circleX-10+"px" 
      circle.classList.add('animacion')
    } else {
      circle.style.left = containerWidth - circleWidth+"px"
    }
    
    
  }

  //Mover con botón de pantalla RIGTH
  right.onclick = function() {

    const circleX = document.querySelector('.circle').offsetLeft
    
    if (circleX < containerWidth - circleWidth) { 
        circle.style.left = circleX+10+"px" 
        circle.classList.add('animacion')
      } else {
        circle.style.left = 0 +"px" //containerWidth - circleX+"px"
      }
    
  }

  red.onclick = function() {
    circle.style.background = 'red'
  }

  blue.onclick = function() {
    circle.style.background = 'blue'
  }

  green.onclick = function() {
    circle.style.background = 'green'
  }

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 38) {
      up.style = "opacity: 0.5"
    }
    if (event.keyCode === 40) {
      down.style = "opacity: 0.5"
    }
    if (event.keyCode === 37) {
      left.style = "opacity: 0.5"
    }
    if (event.keyCode === 39) {
      right.style = "opacity: 0.5"
    }
    if (event.keyCode === 13) {
      play.style = "opacity: 0.5"
    }
    if (event.keyCode === 32) {
      pause.style = "opacity: 0.5"
    }
  })

  window.addEventListener("keyup", function (event) {
    if (event.keyCode === 38) {
      up.style = "opacity: 1"
    }
    if (event.keyCode === 40) {
      down.style = "opacity: 1"
    }
    if (event.keyCode === 37) {
      left.style = "opacity: 1"
    }
    if (event.keyCode === 39) {
      right.style = "opacity: 1"
    }
    if (event.keyCode === 13) {
      play.style = "opacity: 1"
    }
    if (event.keyCode === 32) {
      pause.style = "opacity: 1"
    }
  })

  /*// controlY, determina dirección vertical: 1-baja|0-sube
  let controlY = Math.floor((Math.random() * 1) + 0)


  // controlX, determina dirección vertical: 1-derecha|0-izquierda
  let controlX = Math.floor((Math.random() * 1) + 0)


  // definimos las variables que contienen la posicion de la pelota
  let x = y = 0

  // definimos la velocidad de movimiento en pixels
  let velocidad = 1

  // variable que contiene 
  let idSetInterval = 0

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getRandomInt(5,20)*/

}

