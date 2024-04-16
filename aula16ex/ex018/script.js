var num = document.getElementById("fnum")
var lista = document.getElementById("flista")
var res = document.getElementById("res")
var valores = []
function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }

}
function inlista(n, l){
    if(l.indexOf(Number(n)) >= 0) {
        return false

    }else

    return true
}

function adicionar(){
    if(isNumero(num.value) && inlista(num.value, valores)){
        valores.push(Number(num.value))
        var item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        res.innerHTML = ""
        lista.appendChild(item)

    }else{
        window.alert("Valor inválido ou já encontrado na lista.")
    }
num.value = ""
}
function finalizar(){
    if(valores.length == 0){
        window.alert("Adicione valores antes de finalizar")
    }else{
        var tot = valores.length 
        var maior = 0
        var menor = valores[0]
        var soma = 0
        
        for (var c = 0; c < tot; c++){
            if (valores[c] > maior){
                maior = valores[c]
            }
            if(valores[c] < menor){
                menor = valores[c]

            }
            soma += valores[c]
            
        }
        media = soma/tot
        
        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados <p/>`
        res.innerHTML += `<p>O maior valor informado foi o ${maior} <p/>`
        res.innerHTML += `<p>O Menor valor informado foi o ${menor} <p/>`
        res.innerHTML += `<p>O A soma desses valores é: ${soma}<p/>`
        res.innerHTML += `<p> A média desse valores é de: ${media}<p/>`




    }

}
