
function carregar(){ 
var msg = document.getElementById("msg")
var img = document.getElementById("imagem")
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()


msg.innerHTML = `Agora são ${hora}:${minutos} horas`
if(hora > 0 && hora <12){
    msg.innerHTML = `Agora são ${hora} horas da manhã`
    img.src = "manha.png"
    document.body.style.background = "#f1d4a8"  

}else if(hora >=12 && hora < 18){
    msg.innerHTML = `Agora são ${hora}:${minutos} horas da tarde`
    img.src = "tarde.png"
    document.body.style.background = "#794645"
    
    
}else if(hora >18){
    msg.innerHTML = `Agora são ${hora} horas da noite`
    img.src = "noite.png"
    document.body.style.background = "#0f1a1e"
}

}
