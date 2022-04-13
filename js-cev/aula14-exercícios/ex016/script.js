function count() {
    var start = window.document.querySelector('input#start')
    var end = window.document.querySelector('input#end')
    var step = window.document.querySelector('input#step')
    var result = window.document.querySelector('div#result')

    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0){
        window.alert('[ERRO] Faltam Dados!')
    }else{
        result.innerHTML = 'Contando: <br>'
        let i = Number(start.value)
        let f = Number(end.value)
        let p = Number(step.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando Passo = 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f; c += p){ // Contagem progressiva
                result.innerHTML += `${c} \u{1F449}` // (+=) Adiciona
            }
        }else{
            for(let c = i; c >= f; c -= p){ // Contagem regressiva
                result.innerHTML += `${c} \u{1F449}`
            }
        }
        result.innerHTML += `\u{1F3C1}`
    }    
}