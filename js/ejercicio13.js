
var result13 = document.getElementById("result13")
var va
var vb 
var vc
var vd
var ve
var vf

function hallarVariables(){
    va =  document.getElementById("va").value
    vb = document.getElementById("vb").value
    vc = document.getElementById("vc").value
    vd = document.getElementById("vd").value
    ve = document.getElementById("ve").value
    vf = document.getElementById("vf").value

    if(va!="" && vb!="" && vc!="" && vd!="" && ve!="" && vf!="" ){
        va= parseFloat(va)
        vb= parseFloat(vb)
        vc= parseFloat(vc)
        vd= parseFloat(vd)
        ve= parseFloat(ve)
        vf= parseFloat(vf)
        var denominador = (va*ve - vb*vd)
       if(denominador!=0){
        var x = (vc*ve - vb*vf)/denominador
        var y = (va*vf - vc*vd)/denominador
        
        result13.innerHTML = "X:" + " "+  String(x) + " " + "Y:" + " " +String(y)
    

       }else{
        result13.innerHTML = "Denominador igual a cero"
       }
        
    }else{
        result13.innerHTML = "Valores incorrectos"
    
    }
    
   

}