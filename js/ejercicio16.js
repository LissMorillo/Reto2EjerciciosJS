var result16 = document.getElementById("result16")
const euro = 166.386 
const pe = 1.66
var billetes
var residuo
function calcularDinero(){
    result16.innerHTML = ""
    var pesetas = document.getElementById("pesetas").value
    if(pesetas!=""){
        pesetas = parseFloat(pesetas)
        console.log("pesetas:",pesetas)
        cantidadBilletes(pesetas)


    }else{
        result16.innerHTML = "Valor invalido, solo multiplos de 1.66"
    }
}
vectorPesetas = [50,20,10,5,2,1]
vectorRegreso = []
// 1    2       5        10         20       50   1euro     2euros
//1.66  3.33   8.32     16.64   33.28   83.19    166.386    332.77


function cantidadBilletes(pes){

    if(pes>=166.386){
        billetes = Math.floor(pes/euro)
        residuo = pes % euro

        console.log("prueba", ((billetes*euro)+residuo))
            if(residuo===0){
                console.log("residuo 0")
                result16.innerHTML = "Euros:" + billetes
            }else{
                console.log("residuo diferente de 0")
                result16.innerHTML = "Euros:" + billetes
                hallar(residuo)
            }
    }else{
        //si es menor es poque no hay euros 
        hallarSinEuros(pes)

    }
}

function hallarSinEuros(num){
    for(i=0;i<vectorPesetas.length;i++){
        var centima = (vectorPesetas[i]*pe)
        if(num>=centima){
            var cuantos = num/centima
            vectorRegreso.push(Math.floor(cuantos))
        }else{
            //result16.innerHTML = "valor invalido"
        }
        console.log(vectorRegreso)    
    }
    for(i=0;i<vectorRegreso.length;i++){
        if(vectorRegreso[i]!=""){
            result16.innerHTML += "   " + vectorPesetas[i] + ":" + ""+  vectorRegreso[i] + " "
        }else{
            result16.innerHTML = "valor invalido"
        }
        
    }
    vectorRegreso = []
}

function hallar(res){
    for(i=0;i<vectorPesetas.length;i++){
        var cuantos = res/(vectorPesetas[i]*pe)
        res = res % (vectorPesetas[i]*pe)
        if(res===0){
            return
        }else{
            vectorRegreso.push(Math.floor(cuantos))
            console.log(vectorRegreso)
        }
    }
    console.log(result16.innerHTML )
    for(i=0;i<vectorPesetas.length;i++){
        result16.innerHTML += "   " + vectorPesetas[i] + ":" + ""+  vectorRegreso[i] + " "

    }
    vectorRegreso = []
}