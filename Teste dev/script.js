
var n1 = document.getElementById("n1")
var n2 = document.getElementById("n2")
var result = document.getElementById("resultado")

function adicao() {
    result.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}

function subtrair() {
    result.innerHTML = parseInt(n1.value) - parseInt(n2.value)
 
}

function multiplicar() {
    result.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}


function dividir() {
    result.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}
