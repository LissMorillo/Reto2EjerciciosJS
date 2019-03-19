var result14 = document.getElementById("result14")

function calcularAnioBis(){
var anioBis = document.getElementById("anioBis").value
if(anioBis!=""){
    anioBis =  parseInt(anioBis)
    console.log(anioBis)
    console.log(anioBis % 4)
    if((anioBis % 4) ===0 && (anioBis % 100)!=0 ){
        result14.innerHTML = "Año Bisiesto"
    }else if ( (anioBis % 100)===0 && (anioBis % 400)===0){
        result14.innerHTML = "Año Bisiesto"
    }else{
        result14.innerHTML = "No es un Año Bisiesto"
    }

}else{
    result14.innerHTML = "Valor invalido"
}

}