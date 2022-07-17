let btn_adicionar = document.querySelector('#adicionar')
btn_adicionar.addEventListener('click', analisar)

let n = document.querySelector('#number')
let lista = document.querySelector('#lista')
let vetores = []

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

function analisar(){
    
    if(isNumero(n.value) && !inLista(n.value, valores)){
        alert('ola')
    }else{
        alert('[ERRO] Número inválido ou número já inserido')
    }
}