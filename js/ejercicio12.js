
var result12 = document.getElementById("result12")
var dia 
var mes
var anio
var diaA 
var mesA
var anioA
function calcularEdad(){
    dia = document.getElementById("dia").value
    mes = document.getElementById("mes").value
    anio = document.getElementById("anio").value
   
    diaA = document.getElementById("diaA").value
    mesA = document.getElementById("mesA").value
    anioA = document.getElementById("anioA").value

    if(dia!="" && mes!="" && anio!="" && diaA!="" && mesA!="" && anioA!=""){
        hallarEdad()
    }else{
        result12.innerHTML ="Datos incorrectos"
    }
}

function hallarEdad(){
    mes = parseInt(mes)
    mesA = parseInt(mesA)
    dia = parseInt(dia)
    diaA = parseInt(diaA)
    var rdia = diaA - dia
    var rmes = mesA - mes
    var totalAnio
    var totalDias = 0
    var totalMeses
    if(rdia===0 && rmes===0){
        //ya cumplio años
        totalAnio = parseInt(anioA) - parseInt(anio)
        result12.innerHTML = totalAnio
    }else if (rdia < 0 || rmes < 0){
        //aun no cumple años
        totalAnio = parseInt(anioA) - parseInt(anio) -1
        result12.innerHTML = totalAnio
    }else{
        //ya cumplio
        totalAnio = parseInt(anioA) - parseInt(anio)
        result12.innerHTML = totalAnio
    }


    if(rmes===0){
        //es tu cumpleaños
        alert("tu cumpleaños")
        totalMeses = 0
        totalDias = 0
    }else if(rmes<0){
        //mes actual mayor y menos de nacimiento menor
        alert("aun no cumples")
        totalMeses =  12 + (rmes)
        totalDias = diaA
    }else{//haya cumplido anios
        if(rdia===0){
            totalMeses = rmes
            totalDias = 0
        }else if(rdia > 0){
            totalMeses = rmes
            totalDias = rdia
        }else{
            //ya cumplio años pero el dia actual es menor que el de su cumple
            totalAnio = anioA -anio
            totalMeses = rmes - 1
            totalDias = diasEnMes(mesA-1) - dia + diaA
            
        }
    }
    result12.innerHTML = "dia:"+String(totalDias) +" "+ "mes:" +String(totalMeses) +" "+ "años:"+ String(totalAnio) 


}

function diasEnMes(numDia){
    switch(numDia){
        case 1: return 31
        break;
        case 2: return 28
        break;
        case 3: return 31
        break;
        case 4: return 30
        break;
        case 5: return 31
        break;
        case 6: return 30
        break;
        case 7: return 31
        break;
        case 8: return 31
        break;
        case 9: return 30
        break;
        case 10: return 31
        break;
        case 11: return 30
        break;
        case 12: return 31
        break;
    }
}