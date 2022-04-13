function verificar() {
    var now = new Date()
    var year = now.getFullYear()
    var nasc = Number(window.document.querySelector('input#nasc').value)
    var res = window.document.querySelector('div#res')

    if (nasc == 0 || nasc > year){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var sex = document.getElementsByName('radsex')
        var old = year - nasc
        res.innerHTML = `Idade calculada: ${old} anos`
        var gender = ''
        if (sex[0].checked) {
            gender = 'Homem'
        }else if (sex[1].checked){
            gender = 'Mulher'
        }
        res.style.textAlign = 'center'
        res.innerHTML += `<p>${gender}</p>`
    }
}