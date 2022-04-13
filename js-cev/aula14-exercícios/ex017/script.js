function calculate() {
    let number = window.document.querySelector('input#number')
    let table = window.document.querySelector('select#table')
    
    if(number.value.length == 0){
        window.alert('Por-favor, informe um número')
    }else{
        let n = Number(number.value)
        table.innerHTML = ''
        for(let c = 1; c <= 10; c++){
            let item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            table.appendChild(item) // adiciona no Select do HTML
            item.value = `table${c}` // mostra para outras linguagens qual foi selecionado.
        }
    }   
}