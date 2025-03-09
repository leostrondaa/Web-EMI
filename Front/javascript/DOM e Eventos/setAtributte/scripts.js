let btnM = document.querySelector("#btn_main")
let btnD = document.querySelector("#btn_dark")
let btnL = document.querySelector("#btn_light")
let tit = document.querySelector("#titulo")

btnD.addEventListener("click", darkMode)
btnL.addEventListener("click", lightMode)
btnM.addEventListener("click", mainMode)

function mainMode() {
  tit.classList.remove("dark")
  tit.classList.remove("light")
}

function darkMode() {
  tit.classList.remove("light")
  tit.classList.add("dark")
}

function lightMode() {
  tit.classList.remove("dark")
  tit.classList.add("light")
}
