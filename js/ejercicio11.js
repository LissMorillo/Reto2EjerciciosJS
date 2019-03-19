var result11 =document.getElementById("result11")
var total
function aproximacion(){
    var dado = document.getElementById("inDado").value
    if(dado!= "" && parseInt(dado)>=1111 && parseInt(dado)<=9999) {
        analizarAproximacion(dado)
        result11.innerHTML = total
    }else{
        result11.innerHTML = "solo 4 valores mayores a 0"
    }
}//1234
function analizarAproximacion(numero){
    var numArray = numero.split("")
    var mil =  parseInt(numArray[0])
    var centena = parseInt(numArray[1])
    var desUni = parseInt(numero.substr(2,4))
    if(parseInt(desUni) >= 50){
        
        if(centena=== 9){
            
            total = String(mil+1) + "000"
        }else{
            
            total = String(mil) + String(centena+1) + "00"
        }
       
    }else{
        
        total = String(mil) + String(centena) + "00"
    }
}