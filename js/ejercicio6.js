
var result6 = document.getElementById("result6")

function calularHora(){
    var hora24 = document.getElementById("hora").value
    hora = hora24.split(":")
    hora[0] = parseFloat(hora[0])
    hora[1] = parseFloat(hora[1])
   if(hora[0]>=13 && hora[0] <=24 && hora[1] >= 0 && hora[1] <= 60){
       hora[0] = hora[0] - 12
        result6.innerHTML = "Hora: "+" " + hora[0] + ":" + hora[1] +" pm"
   }else if (hora[0] <=24 && hora[1] >= 0 && hora[1] <= 60){
    result6.innerHTML = "Hora:" + hora[0] + ":" + hora[1] + " am"
   }else{
    result6.innerHTML = "Formato invalido"
   }
}