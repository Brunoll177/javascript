var num = document.getElementById("txtn")
var button = document.getElementById("tab")
var seltab = document.getElementById("seltab")
button.addEventListener("click", calcular)
function calcular(){
    
    if(num.value.length == 0){
        window.alert("[ERRO] Por favor digite um número.")
    
    }else{
        seltab.innerHTML = ''
        for (var c = 1; c <=10; c++){
            var item = document.createElement("option")
            item.text = `${Number(num.value)} x ${c} = ${c*num.value}`
            seltab.appendChild(item)
         

        }

    }
}