var image_array = [
    "A-homem.png",
    "A-mulher.png",
    "C-mulher.Png",
    "H-criança.png",
    "J-homem.png",
    "J-mulher.png",

]
var bnt = document.getElementById("button")
bnt.addEventListener("click", random)
var txt = document.getElementById("txt")
function random(){
    var se = document.getElementById(se)
    
    var random_index = Math.floor(Math.random() * image_array.length)
    var select = image_array[random_index]
    var img = document.getElementById("foto")
    img.src = select
    img.style.height = "250px"
    txt.innerText = `A imagem atual é ${select}`

}
