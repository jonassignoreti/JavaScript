var now = new Date()
var year = now.getFullYear()
var month = now.getMonth() + 1
var day = now.getDate()


var s = window.document.querySelector('div#season')
var p = window.document.querySelector('div#picture')
var d = window.document.querySelector('div#date')
const imagem = window.document.createElement('img')

switch (month){
    case 1:
        var namemonth = 'January'
        break
    case 2:
        var namemonth = 'February'
        break
    case 3:
        var namemonth = 'March'
        break
    case 4:
        var namemonth = 'April'
        break
    case 5:
        var namemonth = 'May'
        break
    case 6:
        var namemonth = 'June'
        break
    case 7:
        var namemonth = 'July'
        break
    case 8:
        var namemonth = 'August'
        break
    case 9:
        var namemonth = 'September'
        break
    case 10:
        var namemonth = 'October'
        break
    case 11:
        var namemonth = 'November'
        break
    case 12:
        var namemonth = 'December'
        break
}

if (month < 3 || month == 3 && day <= 20){
    s.innerHTML = 'SUMMER' //Here is Summer
    imagem.src = 'summer.png'
    document.body.style.background = '#1dbccd'
    p.appendChild(imagem)
}else if (month < 6 || month == 6 && day <= 21){
    s.innerHTML = 'AUTUMN' //Here is Autumn
    imagem.src = 'autumn.png'
    document.body.style.background = '#f88e60'
    p.appendChild(imagem)
}else if (month < 9 || month == 9 && day <= 22){
    s.innerHTML = 'WINTER' //Here is Winter
    imagem.src = 'winter.png'
    document.body.style.background = '#5d4435'
    p.appendChild(imagem)
}else if (month < 12 || month == 12 && day <= 21){
    s.innerHTML = 'SPRING' //Here is Spring
    imagem.src = 'spring.png'
    document.body.style.background = '#ce97b3'
    p.appendChild(imagem)
}else if (month == 12 && day <= 31){
    s.innerHTML = 'SUMMER' //Here is Summer
    imagem.src = 'summer.png'
    document.body.style.background = '#1dbccd'
    p.appendChild(imagem)
}else{
    s.innerHTML = 'Error with the Date'
}

d.innerHTML = `${namemonth} ${day} ${year}`