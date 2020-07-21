window.onload = function() {

  const http = new XMLHttpRequest()

  http.open('GET', 'https://api.weatherapi.com/v1/current.json?key=f0b13ebf0a6b46aa91b25351201707&q=Córdoba')
  http.send()

  http.onreadystatechange = function() {
    http.responseText

    if (http.responseText === '') {
      return
    }

    const respuesta = JSON.parse(http.responseText)

    /// Variables con datos consulta ///

    const TEMP = respuesta.current.temp_c // temperatura en grados centígrados 
    const TIME = respuesta.location.localtime // new Date() // fecha y hora
    const HORA = '0' + TIME.substring(11,13)
    console.log(HORA)
    const LOCATION = respuesta.location.name
    const DAWN = 7.45 // Horario del amanecer
    const SUNSET= 18.50 // Horario anochecer
    const SKY = respuesta.current.condition.text // Sunny - Clear - Partly cloudy - Light drizzle - Mist - Overcast
    const COND_ICON = respuesta.current.condition.icon
    console.log(COND_ICON)
    console.log(SKY)
    const ST = respuesta.current.feelslike_c
    console.log(ST)
    const RAIN = false // boolean

    ////// * Elementos * ////
    
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
    const skyDato = document.querySelector('.sky_dato')
    const stDato = document.querySelector('.st_dato')
    const wIcon = document.querySelector('.w_icon')

    /// Funciones por momento del día///

    function timerDawn() {
      // estilos para el amanecer

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

    // Función que ejecuta estilos según la hora

    function timer () {
      
      // regulo elementos del DOM según la variable TIME para ver la hora
      if (HORA > 19 || HORA < 7 || HORA === '00:') {
        timerNigth()
      }
      if (HORA >= 7 && HORA <= 8) {
        timerDawn()
      }
      if (HORA > 8 && HORA <= 12) {
        timerMorning()
      }
      if (HORA > 12 && HORA < 18) {
        timerEvening()
      }
      if (HORA >= 18 && HORA <= 19) {
        timerSunset()
      }

      location.innerHTML = LOCATION
      degDato.innerHTML = TEMP + 'º C'
      timeDato.innerHTML = TIME
      skyDato.innerHTML = 'Cielo ' + SKY
      stDato.innerHTML = 'ST ' + ST

      wIcon.style = 'background-image: url('+ COND_ICON +'); background-size: contain; background-repeat: no-repeat; with: 80px; height: 80px;'
     
      //visibility()
    }

    // function visibility () {
    //   // regulo elementos del DOM según la variable SKY que indica nubes en el cielo
    //   if (SKY === 'Sunny') {
    //     wIcon.style.backgroundImage = "url('img/w_icons/day/113.png')";
    //   }
    //   if (SKY === 'Clear') {
    //     wIcon.style.backgroundImage = "url('img/w_icons/night/113.png')";
    //   }
    //   if (SKY === 'Partly cloudy') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/116.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/116.png')";
    //     }
    //   }
    //   if (SKY === 'Cloudy') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/119.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/119.png')";
    //     }
    //   }
    //   if (SKY === 'Overcast') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/122.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/122.png')";
    //     }
    //   }
    //   if (SKY === 'Mist') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/143.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/143.png')";
    //     }
    //   }
    //   if (SKY === 'Patchy rain possible') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/176.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/176.png')";
    //     }
    //   }
    //   if (SKY === 'Patchy snow possible') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/179.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/179.png')";
    //     }
    //   }
    //   if (SKY === 'Patchy sleet possible') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/182.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/182.png')";
    //     }
    //   }
    //   if (SKY === 'Patchy freezing drizzle possible') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/185.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/185.png')";
    //     }
    //   }
    //   if (SKY === 'Thundery outbreaks possible') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/200.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/200.png')";
    //     }
    //   }
    //   if (SKY === 'Blowing snow') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/227.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/227.png')";
    //     }
    //   }
    //   if (SKY === 'Blizzard') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/230.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/230.png')";
    //     }
    //   }
    //   if (SKY === 'Fog') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/248.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/248.png')";
    //     }
    //   }
    //   if (SKY === 'Freezing fog') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/260.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/260.png')";
    //     }
    //   }
    //   if (SKY === 'Patchy light drizzle') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/263.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/263.png')";
    //     }
    //   }
    //   if (SKY === 'Freezing drizzle') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/281.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/281.png')";
    //     }
    //   }
    //   if (SKY === 'Heavy freezing drizzle') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/284.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/284.png')";
    //     }
    //   }
    //   if (SKY === 'Patchy light rain') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/293.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/293.png')";
    //     }
    //   }
    //   if (SKY === 'Light rain') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/296.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/296.png')";
    //     }
    //   }
    //   if (SKY === 'Moderate rain at times') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/299.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/299.png')";
    //     }
    //   }
    //   if (SKY === 'Moderate rain') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/302.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/302.png')";
    //     }
    //   }
    //   if (SKY === 'Heavy rain at times') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/305.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/305.png')";
    //     }
    //   }
    //   if (SKY === 'Heavy rain') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/308.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/308.png')";
    //     }
    //   }
    //   if (SKY === 'Light freezing rain') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/311.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/311.png')";
    //     }
    //   }
    //   if (SKY === 'Moderate or heavy freezing rain') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/314.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/314.png')";
    //     }
    //   }
    //   if (SKY === 'Light sleet') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/317.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/317.png')";
    //     }
    //   }
    //   if (SKY === 'Moderate or heavy sleet') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/320.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/320.png')";
    //     }
    //   }
    //   if (SKY === 'Patchy light snow') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/323.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/323.png')";
    //     }
    //   }
    //   if (SKY === 'Light snow') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/326.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/326.png')";
    //     }
    //   }
    //   if (SKY === 'Patchy moderate snow') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/329.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/329.png')";
    //     }
    //   }
    //   if (SKY === 'Moderate snow') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/332.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/332.png')";
    //     }
    //   }
    //   if (SKY === 'Patchy heavy snow') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/335.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/335.png')";
    //     }
    //   }
    //   if (SKY === 'Heavy snow') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/338.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/338.png')";
    //     }
    //   }
    //   if (SKY === 'Ice pellets') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/350.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/350.png')";
    //     }
    //   }
    //   if (SKY === 'Light rain shower') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/353.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/353.png')";
    //     }
    //   }
    //   if (SKY === 'Moderate or heavy rain shower') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/356.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/356.png')";
    //     }
    //   }
    //   if (SKY === 'Torrential rain shower') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/359.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/359.png')";
    //     }
    //   }
    //   if (SKY === 'Light sleet showers') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/362.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/362.png')";
    //     }
    //   }
    //   if (SKY === 'Moderate or heavy sleet showers') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/365.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/365.png')";
    //     }
    //   }
    //   if (SKY === 'Light snow showers') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/368.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/368.png')";
    //     }
    //   }
    //   if (SKY === 'Moderate or heavy snow showers') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/371.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/371.png')";
    //     }
    //   }
    //   if (SKY === 'Light showers of ice pellets') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/374.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/374.png')";
    //     }
    //   }
    //   if (SKY === 'Moderate or heavy showers of ice pellets') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/377.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/377.png')";
    //     }
    //   }
    //   if (SKY === 'Patchy light rain with thunder') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/386.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/386.png')";
    //     }
    //   }
    //   if (SKY === 'Moderate or heavy rain with thunder') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/389.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/389.png')";
    //     }
    //   }
    //   if (SKY === 'Patchy light snow with thunder') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/392.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/392.png')";
    //     }
    //   }
    //   if (SKY === 'Moderate or heavy snow with thunder') {
    //     if (HORA > 19 || HORA < 7) {
    //       wIcon.style.backgroundImage = "url('img/w_icons/night/395.png')";
    //     } else {
    //       wIcon.style.backgroundImage = "url('img/w_icons/day/395.png')";
    //     }
    //   }
    // }

    function rain () {
      // regulo elementos del DOM según la variable RAIN que indica si llueve o no.
    }

    function actualizar(){
      location.reload(true)
    }

    setTimeout(timer, 5000)

    setInterval('document.location.reload()',300000)

  }
}