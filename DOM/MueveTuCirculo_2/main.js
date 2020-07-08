const MOVEMENT = 60

let horizontalPosition = 0
let verticalPosition = 0

window.onload = function() {
  
  const container = document.querySelector('.container')
  const containerHeight = document.querySelector('.container').offsetHeight
  const containerWidth = document.querySelector('.container').offsetWidth

  const up = document.querySelector('.up')
  const left = document.querySelector('.left')
  const right = document.querySelector('.right')
  const down = document.querySelector('.down')

  const circle = document.querySelector('.circle')
  const circleHeight = document.querySelector('.circle').offsetHeight
  const circleWidth = document.querySelector('.circle').offsetWidth
  //const circleX = document.querySelector('.circle').offsetLeft
  //const circleY = document.querySelector('.circle').offsetTop

  const red = document.querySelector('.red')
  const blue = document.querySelector('.blue')
  const green = document.querySelector('.green')

  const play = document.querySelector('.play')
  const pause = document.querySelector('.pause')

  const bottomLimit = containerHeight
  const rightLimit = containerWidth
  

  

  function moveCircleToLeft() {
    const circleY = document.querySelector('.circle').offsetLeft
    circle.style.left = circleY - MOVEMENT
    /*if (circle.offsetLeft > +10) {
    horizontalPosition -= MOVEMENT
      circle.style.marginLeft = horizontalPosition
    }*/
  }

  function moveCircleToRight() {
    const circleY = document.querySelector('.circle').offsetLeft
      circle.style.left = circleY + MOVEMENT
    /*if (circle.offsetLeft < rightLimit) {
    horizontalPosition += MOVEMENT
    circle.style.marginLeft = horizontalPosition
    }*/
  }

  function moveCircleToTop() {
    const circleX = document.querySelector('.circle').offsetTop
    circle.style.top = circleX - MOVEMENT
    /*if (circle.offsetTop > +10) {
    verticalPosition -= MOVEMENT
    circle.style.marginTop = verticalPosition
    }*/
  }

  function moveCircleTobottom() {
    const circleX = document.querySelector('.circle').offsetTop
    circle.style.top = circleX + MOVEMENT
    /*if (circle.offsetTop < bottomLimit) {
    verticalPosition += MOVEMENT
    circle.style.marginTop = verticalPosition
    }*/
  }

  left.onclick = moveCircleToLeft
  right.onclick = moveCircleToRight
  up.onclick = moveCircleToTop
  down.onclick = moveCircleTobottom

  document.onkeydown = function(event) {
    //console.log(circle.offsetLeft)
    //console.log(circle.offsetTop)

    switch (event.keyCode) {
      case 37:
        moveCircleToLeft()
        left.style = 'opacity: 0.7'
        return

      case 38:
        moveCircleToTop()
        up.style = 'opacity: 0.7'
        return

      case 39:
        moveCircleToRight()
        right.style = 'opacity: 0.7'
        return

      case 40:
        moveCircleTobottom()
        down.style = 'opacity: 0.7'
        return

    }
  }

    document.onkeyup = function (event) {
      switch (event.keyCode) {
      case 37:
        left.style = 'opacity: 1'
        return

      case 38:
        up.style = 'opacity: 1'
        return

      case 39:
        right.style = 'opacity: 1'
        return

      case 40:
        down.style = 'opacity: 1'
        return
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

  function randomMove() {
    const movimientos = [
      'arriba',
      'abajo',
      'izquierda',
      'derecha',
    ]

    const randomNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0
    console.log(randomNumber)

    const movimiento = movimientos[randomNumber]

    if (movimiento === 'arriba') {
      moveCircleToTop()
    } else if (movimiento === 'abajo') {
      moveCircleTobottom()
    } else if (movimiento === 'izquierda') {
      moveCircleToLeft()
    } else if (movimiento === 'derecha') {
      moveCircleToRight()
    }

  }

  

  play.onclick = function() {

    setInterval(randomMove, 200)
  }

  pause.onclick = function() {

    location.reload()
  }

  

}