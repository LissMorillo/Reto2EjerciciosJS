var result17 = document.getElementById("result17")
var totalPagar
function salario(){
    var horas = document.getElementById("horasTrabajdas").value
    var valhora = document.getElementById("valorHora").value

    if(horas!="" && valhora!=""){
        horas = parseInt(horas)
        valhora = parseFloat(valhora)
        if(horas>0 && valhora>0){
            pagar(horas,valhora)
            result17.innerHTML ="Total:" + " " + totalPagar
        }else{
            result17.innerHTML = "Datos incorrectos"
        }
    }else{
        result17.innerHTML = "Datos incorrectos"
    }
    
}

function pagar(h,vh){
    if(h<38){
        alert("caso1")
        totalPagar = vh*h
        impuestos(totalPagar)
    }else{
        //sumar horas extras
        totalPagar = vh*h + (h-38)*((vh) + (vh*50/100))
        console.log(totalPagar)
        impuestos(totalPagar)
    }
}

function impuestos(tot){
    if(tot<=50000){
        return
    }else{
        console.log("salario mayor a 50.0000")
        totalPagar = totalPagar - (totalPagar*10/100)
    }
}