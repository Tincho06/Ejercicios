window.onload = function () {
  
  const titulo = document.querySelector('h1')
  const parrafo = document.querySelector('p')
  const logo = document.querySelector('.logo')
  const firma = document.querySelector('.firma')
  const nombre = document.querySelector('#nombre')

  titulo.style = "display: none"
  parrafo.style = "font-size: 25px; color: violet"
  logo.style = "border: 2px solid grey; border-radius: 5px"
  firma.style = "border: 2px solid grey; border-radius: 5px"

  firma.onclick = function() {
    if (nombre.style.display === "none") {
      nombre.style.display = "block"
    } else {
      nombre.style.display = "none"
    }
  }

  console.log(titulo)
  console.log(parrafo)
  console.log(logo)
  console.log(firma)
  console.log(nombre)
}