var context = document.querySelector("#miCanvas").getContext('2d');



function dibujar(){
    context.clearRect(0, 0, 500, 500);

    var radio = document.getElementById("radio").value
    radio = parseFloat(radio)
    if(radio>0 && radio <70){
        context.beginPath();
        context.fillStyle = "blue";
        context.strokeStyle="black";
        context.arc(150, 74, radio,0, 2*Math.PI, false);
        context.fill();
        context.stroke();
        context.closePath();
    }else{
        alert("Valor incorrecto, un radio <= 70")
    }
   

   

}

function diametro(){
 //diamtero
 context.lineWidth = 2;
 context.strokeStyle = "black";
 context.beginPath();
 context.moveTo(150 , 74- radio);
 context.lineTo(150 , 74+ radio);
 context.stroke();

 //diamtero
 context.lineWidth = 2;
 context.strokeStyle = "red";
 context.beginPath();
 context.moveTo(150- radio , 74);
 context.lineTo(150+ radio , 74);
 context.stroke();
}