const MOVEMENT = 50

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
  const circleX = document.querySelector('.circle').offsetLeft
  const circleY = document.querySelector('.circle').offsetTop

  const red = document.querySelector('.red')
  const blue = document.querySelector('.blue')
  const green = document.querySelector('.green')

  const play = document.querySelector('.play')
  const pause = document.querySelector('.pause')

  const bottomLimit = containerHeight
  const rightLimit = containerWidth
  

  

  function moveCircleToLeft() {
    if (circle.offsetLeft > +10) {
    horizontalPosition -= MOVEMENT
      circle.style.marginLeft = horizontalPosition
    }
  }

  function moveCircleToRight() {
    if (circle.offsetLeft < rightLimit) {
    horizontalPosition += MOVEMENT
    circle.style.marginLeft = horizontalPosition
    }
  }

  function moveCircleToTop() {
    if (circle.offsetTop > +10) {
    verticalPosition -= MOVEMENT
    circle.style.marginTop = verticalPosition
    }
  }

  function moveCircleTobottom() {
    if (circle.offsetTop < bottomLimit) {
    verticalPosition += MOVEMENT
    circle.style.marginTop = verticalPosition
    }
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
        return

      case 38:
        moveCircleToTop()
        return

      case 39:
        moveCircleToRight()
        return

      case 40:
        moveCircleTobottom()
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

  


}