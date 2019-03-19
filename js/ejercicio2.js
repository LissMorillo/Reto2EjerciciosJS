
var result2 = document.getElementById("result2")
const g = (6.673 * Math.pow(10,-8))
function calcularFuerza(){
    var m1 = document.getElementById("masa1").value
    var m2 = document.getElementById("masa1").value
    var d = document.getElementById("distancia").value
    masa1 = parseFloat(m1)
    masa2 = parseFloat(m2)
    distancia = parseFloat(d)
    if(masa1>=0 && masa2 >= 0 && distancia >= 0){
        console.log(masa1,masa2,distancia)
        var fuerza = (g*masa1*masa2)/(distancia*distancia)
        result2.innerHTML = fuerza.toString()
    }else{
        result2.innerHTML = "Valor Invalido"
    }
    

}