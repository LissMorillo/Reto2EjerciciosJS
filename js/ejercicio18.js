var result18 = document.getElementById("result18")

function calcularSigno(){
    var num = document.getElementById("varNum").value

    if(num!=""){
        num = parseFloat(num)
        if(num>0){
            result18.innerHTML = "Numero positivo"
        }else if(num===0){
            result18.innerHTML = "Numero igual a cero"
        }else if(num<0){
            result18.innerHTML = "Numero negativo"
        }else{
            result18.innerHTML = "no es un numero"
        }
    }else{
        result18.innerHTML = "valor invalido digitado"
    }
}