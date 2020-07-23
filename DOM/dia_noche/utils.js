///
  const req = new XMLHttpRequest()

  req.open('GET', 'http://api.weatherapi.com/v1/astronomy.json?key=f0b13ebf0a6b46aa91b25351201707&q=córdoba&dt=2020-07-22')
  req.send()

  req.onreadystatechange = function solEstado() {
    req.responseText

    if (req.responseText === '') {
      return
    }
    
    const respuestaAstro = JSON.parse(req.responseText)

    const SUNSET = respuestaAstro.astronomy.astro.sunset
    const DAWN = respuestaAstro.astronomy.astro.sunrise
    console.log(SUNSET)
    console.log(DAWN)
  }
  ///


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