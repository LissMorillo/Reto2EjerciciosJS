const c = 2.997925 * Math.pow(10,10)
var resutl3 = document.getElementById("result3")
function calcularEnergia(){
    var masa3 = document.getElementById("masa3").value
    var operacion = parseFloat(masa3) * Math.pow(c,2)
    resutl3.innerHTML = "E =" + operacion
}