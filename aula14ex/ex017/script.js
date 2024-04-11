
function contar(){
let num = document.getElementById("txtn")
let tab = document.getElementById("seltab") 
if(num.length == 0){
    window.alert("[ERRO] Por favor digite um número.")

}else{
    tab.innerHTML = ("")
    n = Number(num.value)
    for(let c = 1; c <= 10; c++){
        let item = document.createElement("option")
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)

    }
}

}