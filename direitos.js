const darkmode = document.querySelector(".OnOff")
const cards = document.querySelectorAll(".card")
const titulos = document.querySelectorAll("h2")
const texto = document.querySelectorAll("p")
const corpo = document.body
const titulo = document.querySelector("h1")
const bolinha = document.querySelector(".circle")

darkmode.addEventListener("click", () => {

    cards.forEach(x => {
        x.classList.toggle("DarkMode")
    })
    titulos.forEach(z => {
        z.classList.toggle("DarkMode")
    })
    texto.forEach(y => {
        y.classList.toggle("DarkMode")
    })
    corpo.classList.toggle("DarkMode")
    titulo.classList.toggle("DarkMode")

    bolinha.classList.toggle("CircleOn")

})