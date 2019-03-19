var result8 = document.getElementById("result8")
var centena 
var descenas = 0
var unidades = ""
function convertirNumero(){
    var cadena = document.getElementById("numero").value
    cadena = cadena.toLowerCase()
    cadena = cadena.split(" ")
    centena = cadena[0]

    if(cadena!=""){
    
        if(cadena.length === 1){
            MostrarCentena()
            result8.innerHTML = String(centena) + "00"
        }else if(cadena.length===2){
            console.log(cadena)
            MostrarCentena()
            console.log(cadena[1])
            hallarDescenas(cadena[1])
            console.log(descenas)
            result8.innerHTML = String(centena) + String(descenas) 
        }else {
            MostrarCentena()
            mostrarDescenas(cadena[1])
            mostrarUnidades(cadena[3])
            result8.innerHTML = String(centena) + String(descenas) + String(unidades)
        }
    
    
    }else{
        alert("valor invalido")
    }
    
}
function MostrarCentena(){
    switch(centena){
        
        case "cien": centena = 1 
        break;
        case "ciento": centena =1
        break;
        case "doscientos": centena = 2
        break;
        case "trecientos": centena = 3
        break;
        case "cuatrocientos": centena = 4
        break;
        case "quinientos": centena = 5
        break;
        case "seicientos": centena = 6
        break;
        case "setecientos": centena = 7
        break;
        case "ochocientos": centena = 8
        break;
        case "novecientos": centena = 9
        break;
        default: return 0
    }
}

function hallarDescenas(des){
    switch(des){
        case "diez": descenas =10; 
        break;
        case "once": descenas =11; 
        break;
        case "doce": descenas =12; 
        break;
        case "trece": descenas =13; 
        break;
        case "catorce": descenas =14; 
        break;
        case "quience": descenas =15; 
        break;
        case "dieciseis": descenas =16;
        break;
        case "diecisiete": descenas =17;
        break;
        case "dieciocho": descenas =18; 
        break;
        case "diecinueve": descenas =19;
        break;
        case "veinte": descenas = 20; 
        break;
        case "ventiuno": descenas =21; 
        break;
        case "ventidos": descenas =22; 
        break;
        case "ventitres": descenas =23; 
        break;
        case "venticuatro": descenas =24; 
        break;
        case "venticinco": descenas =25; 
        break;
        case "ventiseis": descenas =26; 
        break;
        case "ventisiete": descenas =27; 
        break;
        case "ventiocho": descenas =28; 
        break;
        case "ventinueve": descenas =29; 
        break;
        case "treinta": descenas =30; 
        break;
        case "cuarenta": descenas =40; 
        break;
        case "cincuenta": descenas =50; 
        break;
        case "sesenta": descenas =60; 
        break;
        case "setenta": descenas =70; 
        break;
        case "ochenta": descenas =80; 
        break;
        case "noventa": descenas =90; 
        break;

    }
}
function mostrarDescenas(des){
    var sigla  = des.substr(0,3)
    switch(sigla){
        case "die": descenas = 1
        break;
        case "ven": descenas = 2
        break;
        case "tre": descenas = 3
        break;
        case "cua": descenas = 4
        break;
        case "cin": descenas = 5
        break;
        case "ses": descenas = 6
        break;
        case "set": descenas = 7
        break;
        case "och": descenas = 8
        break;
        case "nov": descenas = 9
        break;
       
    }

}

function mostrarUnidades(uni){
    switch(uni){
        case "uno": unidades = 1
        break;
        case "dos": unidades = 2
        break;
        case "tres": unidades = 3
        break;
        case "cuatro": unidades = 4
        break;
        case "cinco": unidades = 5
        break;
        case "seis": unidades = 6
        break;
        case "siete": unidades = 7
        break;
        case "ocho": unidades = 8
        break;
        case "nueve": unidades = 9
        break;

    }
}