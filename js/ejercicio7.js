var result7 = document.getElementById("result7")

function calularFecha(){
    var cadena = document.getElementById("fecha").value
    var fecha = cadena.split(",")
    var dia = fecha[0]
    var mesAnio = fecha[1].split(" ")
    var mes = mesAnio[1].toLowerCase()
    var anio = mesAnio[2]
    var numMes = mesNUmerico(mes)
    if(numMes>0){
        result7.innerHTML = dia + " " + numMes + " " + anio
    }else{
        result7.innerHTML = "Valor invalido"
    }
}

function mesNUmerico(nameMes){
    switch(nameMes){
        case 'enero':return 1
        break; 
        case 'febrero': return 2
        break; 
        case 'marzo':return 3
        break; 
        case 'abril':return 4
        break; 
        case 'mayo':return 5
        break; 
        case 'junio': return 6
        break; 
        case 'julio': return 7
        break; 
        case 'agosto': return 8
        break; 
        case 'septiembre': return 9
        break; 
        case 'octubre': return 10
        break; 
        case 'noviembre': return 11
        break; 
        case 'diciembre': return 12
        break; 
        default: return 0

    }
}