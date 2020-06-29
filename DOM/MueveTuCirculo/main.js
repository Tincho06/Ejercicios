window.onload = function() {
  
  const container = document.querySelector('.container')
  const containerHeight = document.querySelector('.container').offsetHeight
  const containerWidth = document.querySelector('.container').offsetWidth

  const arrows = document.querySelectorAll('.arrow')

  const up = document.querySelector('.up')
  const left = document.querySelector('.left')
  const right = document.querySelector('.right')
  const down = document.querySelector('.down')

  const circle = document.querySelector('.circle')

  const red = document.querySelector('.red')
  const blue = document.querySelector('.blue')
  const green = document.querySelector('.green')

  const play = document.querySelector('.play')
  const pause = document.querySelector('.pause')

  function moveCircle(object) {
    const key = object.which

    const circleY = document.querySelector('.circle').offsetLeft
    const circleX = document.querySelector('.circle').offsetTop

    //Secuencia de sentencias condicionales
        switch (key){
            case 37 :   
                circle.style.left = circleY-10+"px" 
                circle.classList.add('animacion')  ; break
                
            case 38 :
                circle.style.top = circleX-10+"px"
                circle.classList.add('animacion')  ; break
                
            case 39 : 
                circle.style.left = circleY+10+"px"
                circle.classList.add('animacion')  ; break
                
            case 40 :
                circle.style.top = circleX+10+"px"
                circle.classList.add('animacion')  ; break
                
        //default :alert("Solo se mueve con las flechas!")
        }
  }

  //Mover con las flechas
  document.onkeydown = moveCircle

  //Mover con botón de pantalla UP
  up.onclick = function() {

    const circleX = document.querySelector('.circle').offsetTop
    
    circle.style.top = circleX-10+"px"
    circle.classList.add('animacion')

  }

  //Mover con botón de pantalla DOWN
  down.onclick = function() {

    const circleX = document.querySelector('.circle').offsetTop
    
    circle.style.top = circleX+10+"px"
    
  }

  //Mover con botón de pantalla LEFT
  left.onclick = function() {

    const circleY = document.querySelector('.circle').offsetLeft
    
    circle.style.left = circleY-10+"px"
    
  }

  //Mover con botón de pantalla RIGTH
  right.onclick = function() {

    const circleY = document.querySelector('.circle').offsetLeft
    
    circle.style.left = circleY+10+"px"
    
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

  // controlY, determina dirección vertical: 1-baja|0-sube
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
  getRandomInt(5,20)

}

