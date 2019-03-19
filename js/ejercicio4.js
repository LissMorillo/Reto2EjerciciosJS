var result4 = document.getElementById("result4")

function calcularH(){
    var a = document.getElementById("ladoA").value
    var b = document.getElementById("ladoB").value
    a= parseFloat(a)
    b= parseFloat(b)
    var operacion = Math.pow(a,2) + Math.pow(b,2)
    operacion = Math.sqrt(operacion)
    result4.innerHTML = "h= " + operacion
}