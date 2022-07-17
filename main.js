let btn_adicionar = document.querySelector('#adicionar')
btn_adicionar.addEventListener('click', adicionar)

let num = document.querySelector('#number')
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('[ERRO] Número inválido ou número já inserido')
    }
    num.value = ''
    num.focus()
}

let btn_finalizar = document.querySelector('#finalizar')
btn_finalizar.addEventListener('click', analisar)

function analisar(){
    if(valores.length == 0){
        alert('[ERRO] Adicione algum número antes de finalizar!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let média = 0
        for(let pos in valores){
            soma += valores[pos]

            if(valores[pos]  > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        média = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Foram adicionados ${total} números</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores inseridos foram ${média}</p>`
    }
}
