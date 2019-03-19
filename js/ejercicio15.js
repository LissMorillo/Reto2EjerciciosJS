var result15 = document.getElementById("result15")

function calcularDias(){
    //verificar si es bisiesto diasEnMes
    var numAnio = document.getElementById("numAnio").value
    var numMes = document.getElementById("numMes").value


    if(numAnio!="" &&numMes!=""){
        numAnio =  parseInt(numAnio)
        numMes =  parseInt(numMes)

        if(numMes===2){
            if((numAnio % 4) ===0 && (numAnio % 100)!=0 ){

                result15.innerHTML = "Año Bisiesto con " +String(diasEnMes(2)+1) + " "+"dias"
            }else if ( (numAnio % 100)===0 && (numAnio % 400)===0){
                result15.innerHTML = "Año Bisiesto con " +String(diasEnMes(2)+1) + " " +"dias"
            }else{
                result15.innerHTML = "No es un Año Bisiesto"
            }
        }else{
                result15.innerHTML = "Año con " +String(diasEnMes(numMes)) + "dias"
        }
    
    }else{
        result15.innerHTML = "Valor invalido"
    }
}