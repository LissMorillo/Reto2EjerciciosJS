var result10 =document.getElementById("result10")
var totalCifra
function convertirDeRomano(){
    var siglas = document.getElementById("siglas").value
    totalCifra = 0
    if(siglas!=""){
        siglas = siglas.toLowerCase()
        var array = siglas.split("")
        console.log(array)
        if(array.length>=3){
            comparar(array)
        }else if(array.length===2){
           
            var primero = equivalente(array[0])
            var segundo = equivalente(array[1])
            console.log(primero)
            console.log(segundo)
            console.log(totalCifra)
            if(primero < segundo){
                totalCifra = totalCifra + segundo - primero
                result10.innerHTML = totalCifra
            }else{
                totalCifra = totalCifra + primero + segundo
                result10.innerHTML = totalCifra
            }

        }else if(array.length===1){
            result10.innerHTML = equivalente(array[0])
        }else{
            result10.innerHTML = "Datos invalidos"
        }
        array=[]

    }else{
        result10.innerHTML = "Datos invalidos"
    }
}
//IXv
//XIv
function comparar(vector){
    for(i=0;i<vector.length ;i++){
        var primero = equivalente(vector[i])
        var segundo
        console.log(typeof(vector[i+1]))
        if(typeof(vector[i+1])!="string"){
            segundo = 0
        }else{
             segundo = equivalente(vector[i+1])
        }
        console.log("perimero",primero)
        console.log("segundo",segundo)
        if(primero < segundo){
            totalCifra = totalCifra + segundo - primero
            i = i+1
        }else if(primero > segundo){
            totalCifra = totalCifra + primero
        }else{
            totalCifra = totalCifra + primero 
        }
        console.log(totalCifra)
       
    }
    result10.innerHTML = totalCifra

}

function equivalente(sig){
    switch(sig){
        case "i": return 1
        break;
        case "v": return 5
        break;
        case "x": return 10
        break;
        case "l": return 50
        break;
        case "c": return 100
        break;
        case "d": return 500
        break;
        case "m": return 1000
        break;
        case "cm": return 900
        default: return 0
    }
}