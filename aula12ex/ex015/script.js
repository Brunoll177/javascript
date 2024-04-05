var button = document.getElementById("bnt")
button.addEventListener("click", verificar)
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    var fds = document.getElementById("fds")
    
    if (fano.value > ano || fano.value.length == 0 || fano.value < 1975) {
        window.alert("Verifique os dados e tente novamente.")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if(fsex[0].checked){
            genero = "Homem"
            if (idade >= 0 && idade <= 10){
                img.setAttribute("src", "H-criança.png")
            }else if(idade <= 21){
                img.setAttribute("src","J-homem.png" )

            }else if(idade <= 50){
                img.setAttribute("src", "A-homem.png")

            }
            
        }else if(fsex[1].checked){
            genero = "Mulher"
            if (idade >= 0 && idade <= 10){
                img.setAttribute("src", "C-mulher.png")

            }else if(idade <= 21){
                img.setAttribute("src", "j-mulher.png")
                
            }else if(idade <= 50){
                img.setAttribute("src", "A-mulher.png")

            }
        }
        res.innerHTML = `Detectamos ${genero} de idade ${idade} anos` 
        res.appendChild(img)
        

        
    }

    
}