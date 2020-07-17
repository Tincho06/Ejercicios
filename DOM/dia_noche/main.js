const http = new XMLHttpRequest()

http.open('GET', 'https://api.weatherapi.com/v1/current.json?key=f0b13ebf0a6b46aa91b25351201707&q=Córdoba')
http.send()

http.onreadystatechange = function() {
  http.responseText

  if (http.responseText === '') {
    return
  }

  const respuesta = JSON.parse(http.responseText)

  //console.log(respuesta.current.temp_c)

  const TEMP = respuesta.current.temp_c // temperatura en grados centígrados 
  const TIME = respuesta.location.localtime // new Date() // fecha y hora
  const HORA = TIME.substring(11,13)
  //console.log('hora ' + HORA)
  const LOCATION = respuesta.location.name
  const DAWN = 7.45 // Horario del amanecer
  const SUNSET= 18.50 // Horario anochecer
  const SKY = respuesta.current.condition.text // Sunny
  //console.log(SKY)
  const RAIN = false // boolean

  window.onload = function() {
    
    const cielo = document.querySelector('.container') // fondo del contenedor

    const grass = document.querySelector('.grass') // césped

    const foreat = document.querySelector('.foreat') // pinos
    
    const flowers = document.querySelectorAll('.item')
    const plantsCont = document.querySelector('.plants_cont') // contenedor de plantas
    const flower2 = document.querySelector('.flower2')
    const cactus = document.querySelector('.cactus')
    const flower3 = document.querySelector('.flower3')
    const plant = document.querySelector('.plant')
    const flower4 = document.querySelector('.flower4')
    const gardenPlant = document.querySelector('.garden-plant')
    const flower = document.querySelector('.flower')

    const clouds = document.querySelector('.clouds_cont') // contenedor de nubes
    const cloud = document.querySelector('.cloud') // nubes

    const sun = document.querySelector('.sun') // sol

    const moon = document.querySelector('.moon') // luna

    const stars = document.querySelector('.star_cont') // contenedor de estrllas
    const star = document.querySelectorAll('.star') // estrellas

    const termometro = document.querySelector('.v_stick') // indicador rojo del termómetro

    const location = document.querySelector('.location')
    const degDato = document.querySelector('.deg_dato')
    const timeDato = document.querySelector('.time')

    function timerDawn() {
      console.log(flowers)
      // estilos para el amanecer
      const cielo = document.querySelector('.container')

      //Cielo - Sol - Luna - Flores - Estrellas
      cielo.classList.add('skyDawn')
      cielo.classList.remove('container_animation')

      sun.classList.add('sunDawn')
      sun.classList.remove('sun_animation')

      moon.classList.add('moonDawn')
      moon.classList.remove('moon_animation')

      flower.classList.add('flowerDawn')
      flower.classList.remove('flower_animation')
      flower2.classList.add('flowerDawn')
      flower2.classList.remove('flower2_animation')
      flower3.classList.add('flowerDawn')
      flower3.classList.remove('flower3_animation')
      flower4.classList.add('flowerDawn')
      flower4.classList.remove('flower4_animation')
      cactus.classList.add('flowerDawn')
      cactus.classList.remove('cactus_animation')
      plant.classList.add('flowerDawn')
      plant.classList.remove('plant_animation')
      gardenPlant.classList.add('flowerDawn')
      gardenPlant.classList.remove('garden-plant_animation')
      
      stars.classList.add('starsDawn')
    }

    function timerMorning() {
      const cielo = document.querySelector('.container')
      // estilos para la mañana
      cielo.classList.add('skyMorning')
      cielo.classList.remove('container_animation')

      sun.classList.add('sunMorning')
      sun.classList.remove('sun_animation')

      moon.classList.add('moonMorning')
      moon.classList.remove('moon_animation')

      flower.classList.add('flowerMorning')
      flower.classList.remove('flower_animation')
      flower2.classList.add('flowerMorning')
      flower2.classList.remove('flower2_animation')
      flower3.classList.add('flowerMorning')
      flower3.classList.remove('flower3_animation')
      flower4.classList.add('flowerMorning')
      flower4.classList.remove('flower4_animation')
      cactus.classList.add('flowerMorning')
      cactus.classList.remove('cactus_animation')
      plant.classList.add('flowerMorning')
      plant.classList.remove('plant_animation')
      gardenPlant.classList.add('flowerMorning')
      gardenPlant.classList.remove('garden-plant_animation')

      stars.classList.add('starsMorning')
    }

    function timerEvening() {
      const cielo = document.querySelector('.container')
      // estilos para la tarde
      cielo.classList.add('skyEvening')
      cielo.classList.remove('container_animation')

      sun.classList.add('sunEvening')
      sun.classList.remove('sun_animation')

      moon.classList.add('moonEvening')
      moon.classList.remove('moon_animation')

      flower.classList.add('flowerEvening')
      flower.classList.remove('flower_animation')
      flower2.classList.add('flowerEvening')
      flower2.classList.remove('flower2_animation')
      flower3.classList.add('flowerEvening')
      flower3.classList.remove('flower3_animation')
      flower4.classList.add('flowerEvening')
      flower4.classList.remove('flower4_animation')
      cactus.classList.add('flowerEvening')
      cactus.classList.remove('cactus_animation')
      plant.classList.add('flowerEvening')
      plant.classList.remove('plant_animation')
      gardenPlant.classList.add('flowerEvening')
      gardenPlant.classList.remove('garden-plant_animation')

      stars.classList.add('starsEvening')
      
    }

    function timerSunset() {
      const cielo = document.querySelector('.container')
      // estilos para el atardecer
      cielo.classList.add('skySunset')
      cielo.classList.remove('container_animation')

      sun.classList.add('sunSunset')
      sun.classList.remove('sun_animation')

      moon.classList.add('moonSunset')
      moon.classList.remove('moon_animation')

      flower.classList.add('flowerSunset')
      flower.classList.remove('flower_animation')
      flower2.classList.add('flowerSunset')
      flower2.classList.remove('flower2_animation')
      flower3.classList.add('flowerSunset')
      flower3.classList.remove('flower3_animation')
      flower4.classList.add('flowerSunset')
      flower4.classList.remove('flower4_animation')
      cactus.classList.add('flowerSunset')
      cactus.classList.remove('cactus_animation')
      plant.classList.add('flowerSunset')
      plant.classList.remove('plant_animation')
      gardenPlant.classList.add('flowerSunset')
      gardenPlant.classList.remove('garden-plant_animation')

      stars.classList.add('starsSunset')
    }

    function timerNigth() {
      const cielo = document.querySelector('.container')
      // estilos para la noche
      cielo.classList.add('skyNight')
      cielo.classList.remove('container_animation')

      sun.classList.add('sunNight')
      sun.classList.remove('sun_animation')

      moon.classList.add('moonNight')
      moon.classList.remove('moon_animation')

      flower.classList.add('flowerNight')
      flower.classList.remove('flower_animation')
      flower2.classList.add('flowerNight')
      flower2.classList.remove('flower2_animation')
      flower3.classList.add('flowerNight')
      flower3.classList.remove('flower3_animation')
      flower4.classList.add('flowerNight')
      flower4.classList.remove('flower4_animation')
      cactus.classList.add('flowerNight')
      cactus.classList.remove('cactus_animation')
      plant.classList.add('flowerNight')
      plant.classList.remove('plant_animation')
      gardenPlant.classList.add('flowerNight')
      gardenPlant.classList.remove('garden-plant_animation')

      stars.classList.add('starsNight')
    }

    function weather () {
      // regulo elementos del DOM según la variable TEMP que me indica los grados centígrados
    }

    function timer () {
      
      // regulo elementos del DOM según la variable TIME para ver la hora
      if (HORA > 19 || HORA <= 7) {
        timerNigth()
      }
      if (HORA >= 7 && HORA <= 8) {
        timerDawn()
      }
      if (HORA > 8 && HORA <= 12) {
        timerMorning()
      }
      if (HORA > 12 && HORA <= 18) {
        timerEvening()
      }
      if (HORA > 18 && HORA <= 19) {
        timerSunset()
      }

      location.innerHTML = LOCATION
      degDato.innerHTML = TEMP + 'º C'
      timeDato.innerHTML = TIME
    }

    function visibility () {
      // regulo elementos del DOM según la variable SKY que indica nubes en el cielo
    }

    function rain () {
      // regulo elementos del DOM según la variable RAIN que indica si llueve o no.
    }

    function actualizar(){
      location.reload(true)
    }

  setTimeout(timer, 5000)

  //setInterval('document.location.reload()',15000)

  }
}