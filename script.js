document.getElementById("gold").addEventListener("click",button2)

document.getElementById("gray").addEventListener("click",button3)

function button2 () {
  document.getElementById("paragraph1").innerHTML = "Hello world"
  document.getElementById("background").style.backgroundColor ="gray"
}

function button3 () {
document.getElementById("background").style.backgroundColor = "gold"
}