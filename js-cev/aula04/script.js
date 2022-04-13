function connect(){
    //connect with the database.
}

function register(){
    var name = window.document.querySelector('input#name')
    var res = window.document.querySelector('p#result')

    res.innerHTML = `${name.value}` // ".value" para mostrar o valor.
}


