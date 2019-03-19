var result = document.getElementById("result")
var filaTitulosNotas =  document.getElementById("filaTitulosNotas")
var filaNotas = document.getElementById("filaNotas")
var notes = []
var media
var sum = 0
var claseTh = "th"
var claseTd = "td"
function addNumber(){
    var input = document.getElementById("num").value;
    var inputNumber = parseInt(input)
    if( inputNumber >= 0 && inputNumber <= 100){
        notes.push(inputNumber)
        addDOM(inputNumber)
        console.log(notes)
        //media()
    }else{
        result.innerHTML = "Nota sin valor"
    }
}

function addDOM(numero){
    //filaTitulosNotas.innerHTML += "<tr class= '"+claseTh+"'>Nota "+ notes.length+ " </tr>"
    filaNotas.innerHTML += "<tr><td class='"+claseTd+"'>" + notes.length + "</td>"+
                            "<td class='"+claseTd+"'>" + numero + "</td>" +"</tr>"
    document.getElementById("num").value = ""
    console.log(filaTitulosNotas)
    console.log(filaNotas)
}   
function media(){
    for (let index = 0; index < notes.length; index++) {
        sum += notes[index] 
    }
    media = sum / (notes.length)
    console.log(media)
    getRange(media)
    console.log(media)
    //notes = []
}

function getRange(numMedia){
    if(numMedia >= 0 && numMedia <= 59){
        result.innerHTML = "Puntuacion : E " + media
    }else if(numMedia >= 60 && numMedia <= 69){
        result.innerHTML = "Puntuacion : D " + media
    }else if(numMedia >= 70 && numMedia <= 79){
        result = "Puntuacion : C " + media
    }else if(numMedia >= 80 && numMedia <= 89){
        result.innerHTML = "Puntuacion : B " + media
    }else if(numMedia >= 90 && numMedia <= 100){
        result.innerHTML = "Puntuacion : A " + media
    }else{

    }
}
