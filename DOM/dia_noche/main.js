window.onload = function() {

  
  const http = new XMLHttpRequest()

  http.open('GET', 'https://api.weatherapi.com/v1/current.json?key=f0b13ebf0a6b46aa91b25351201707&q=Córdoba&lang=es')
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
    const WIND_DIR = respuesta.current.wind_dir // Dirección del viento
    const WIND_KPH = respuesta.current.wind_kph // Velocidad del viento
    console.log(WIND_DIR)
    console.log(WIND_KPH)
    const LOCATION = respuesta.location.name
    //const DAWN = 7.45 // Horario del amanecer
    //const SUNSET= 18.50 // Horario anochecer - respuesta.astronomy.astro.sunset
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
    const windDato = document.querySelector('.wind_dir')
    const hourDato = document.querySelector('.date_hour_txt')
    const recargaBtn = document.querySelector('.refresh')

    const brujuDato = document.querySelector('.bruju_stick')

    ///Establecer momentos del día
    function dayMoment() {
    }

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
      if (HORA > 19 || HORA < 7 || HORA === '00:' || HORA === '01:' || HORA === '02:' || HORA === '03:' || HORA === '04:' || HORA === '05:' || HORA === '06:') {
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
      skyDato.innerHTML = SKY
      stDato.innerHTML = 'ST ' + ST
      windDato.innerHTML = 'Viento ' + WIND_DIR + ' / ' + WIND_KPH + ' Kph'

      wIcon.style = 'background-image: url('+ COND_ICON +'); background-size: contain; background-repeat: no-repeat;'
     
      rain()

      temperature()

      windDirection()
      
    }

    function rain () {
      // regulo elementos del DOM según la variable RAIN que indica si llueve o no.
      if (SKY === 'Nublado') {
        cielo.classList.add('skyCloudy')
        cielo.classList.remove('container_animation')
        sun.classList.add('sunNight')
        sun.classList.remove('sunEvening')
        sun.classList.remove('sunMorning')
        sun.classList.remove('sunSunset')
        sun.classList.remove('sunDawn')
        moon.classList.add('moonMorning')
        moon.classList.remove('moonEvening')
      }

      if (SKY === 'Lluvia moderada' || SKY === 'Ligeras lluvias' || SKY === 'Cielo cubierto') {
        cielo.classList.add('skyCloudy')
        cielo.classList.remove('container_animation')
        sun.classList.add('sunNight')
        sun.classList.remove('sunEvening')
        sun.classList.remove('sunMorning')
        sun.classList.remove('sunSunset')
        sun.classList.remove('sunDawn')
        moon.classList.add('moonMorning')
        moon.classList.remove('moonEvening')
        stars.classList.remove('starsNight')
        stars.classList.add('starsEvening')
      }

      if (SKY === 'Parcialmente nublado') {
        cielo.classList.add('skyPCloudy')
        cielo.classList.remove('container_animation')
        sun.classList.add('sunNight')
        sun.classList.remove('sunEvening')
        sun.classList.remove('sunMorning')
        sun.classList.remove('sunSunset')
        sun.classList.remove('sunDawn')
        moon.classList.add('moonMorning')
        moon.classList.remove('moonEvening')
      }
    }

    function temperature() {
      grados = TEMP * 2.5
      //console.log(grados)

      termometro.style.height = grados
    }

    function windDirection() {
      if (WIND_DIR === 'N') {
        brujuDato.style = "transform: rotate(0deg);"
      }
      if (WIND_DIR === 'S') {
        brujuDato.style = "transform: rotate(180deg);"
      }
      if (WIND_DIR === 'E') {
        brujuDato.style = "transform: rotate(90deg);"
      }
      if (WIND_DIR === 'W') {
        brujuDato.style = "transform: rotate(-90deg);"
      }
      if (WIND_DIR === 'NE') {
        brujuDato.style = "transform: rotate(45deg);"
      }
      if (WIND_DIR === 'NNE') {
        brujuDato.style = "transform: rotate(23deg);"
      }
      if (WIND_DIR === 'ENE') {
        brujuDato.style = "transform: rotate(68deg);"
      }
      if (WIND_DIR === 'NW') {
        brujuDato.style = "transform: rotate(-45deg);"
      }
      if (WIND_DIR === 'NNW') {
        brujuDato.style = "transform: rotate(-23deg);"
      }
      if (WIND_DIR === 'WNW') {
        brujuDato.style = "transform: rotate(-68deg);"
      }
      if (WIND_DIR === 'SE') {
        brujuDato.style = "transform: rotate(135deg);"
      }
      if (WIND_DIR === 'SSE') {
        brujuDato.style = "transform: rotate(158deg);"
      }
      if (WIND_DIR === 'ESE') {
        brujuDato.style = "transform: rotate(113deg);"
      }
      if (WIND_DIR === 'SW') {
        brujuDato.style = "transform: rotate(-135deg);"
      }
      if (WIND_DIR === 'SSW') {
        brujuDato.style = "transform: rotate(-158deg);"
      }
      if (WIND_DIR === 'WSW') {
        brujuDato.style = "transform: rotate(-113deg);"
      }
    }

    function actualizar(){
      location.reload(true)
    }

    // Para la fecha de hoy 
    Date.prototype.today = function() { 
        return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear(); 
    } 

    // Para la hora actual 
    Date.prototype.timeNow = function() { 
        return ((this.getHours() < 10)?"0":"") + this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds(); 
    } 
    const datetime = new Date().today() + " || " + new Date().timeNow()
    console.log(datetime)

    hourDato.innerHTML = datetime

    recargaBtn.onclick = function() {
      document.location.reload()
    }

    setTimeout(timer, 5000)

    setInterval('document.location.reload()',300000)

  }
}