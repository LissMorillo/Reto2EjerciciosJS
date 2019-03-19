var result5 = document.getElementById("result5")

function calcularArea(){
    var la = document.getElementById("a").value
    var lb = document.getElementById("b").value
    var lc = document.getElementById("c").value

    la = parseFloat(la)
    lb = parseFloat(lb)
    lc = parseFloat(lc)

    if(la >= 0 && lb >= 0 && lc >= 0){
        var p = (la + lb + lc)/2
        console.log(p)
        var raiz = p*(p-la)*(p-lb)*(p-lc)
        var area = Math.sqrt(raiz) 
        result5.innerHTML = "Area = " + area
    }else{
        result5.innerHTML = "Valor invalido"
    }
}