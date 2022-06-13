function calcular(){

    document.getElementById("btnCalcular").addEventListener("click", verificar);
}

function verificar(){
    let nombre= document.getElementById("NombreApellido").value;
    let monto= document.getElementById("MontoInvertir").value;
    let dias= document.getElementById("CantidadDias").value;
    let reinvertir= document.getElementById("capital").value;

     
    if(nombre===""|| monto==="" ||dias ===""){
        let error= document.getElementById("nombreError");
        error.innerHTML= "hay campos sin llenar";
   
    }else{
        varificaMonto(monto);
        varificaDias(dias);
        calculo(parseInt(monto), dias);
        let error= document.getElementById("nombreError");
        error.innerHTML=""
    }
    if(reinvertir=== "si"){
        calcularReinversion(parseInt(monto), dias);
    }



}
function varificaMonto(valor){
    if(valor < 1000 ){
        let error= document.getElementById("montoError");
        error.innerHTML= "el monto debe ser mayor a 1000";

    }else{
        let error= document.getElementById("montoError");
        error.innerHTML= "";
    }

}
function varificaDias(valor){
    if(valor < 30 ){
        let error= document.getElementById("diasError");
        error.innerHTML= "ingrese un valor numerico mayor a 30"
    }else{
        let error= document.getElementById("diasError");
        error.innerHTML= "";
    }

}

function calculo(valor, dias){
    console.log(valor, dias)
    let intereses=0;
    if (dias >= 30 && dias<= 60){
        intereses=0.40
    }
    if(dias >60 && dias <= 120){
        intereses= 0.45
    }
    if(dias >120 && dias <= 360){
        intereses= 0.50
    }
    if(dias > 360){
        intereses= 0.65
    }
    console.log(intereses)
    let montoFinal= valor + (valor * dias/360 * intereses);
    let resultado= document.getElementById("resultado");
    resultado.innerHTML= `el monto que recibira es:$ ${Number.parseFloat(montoFinal).toFixed(2)}`

}
let monstosTotales=[];
let a=0;
let p=1;

function calcularReinversion(monto, dias){
 
 if (a===4){
     return 0
 }
 let intereses=0;
    if (dias >= 30 && dias<= 60){
        intereses=0.40
    }
    if(dias >60 && dias <= 120){
        intereses= 0.45
    }
    if(dias >120 && dias <= 360){
        intereses= 0.50
    }
    if(dias > 360){
        intereses= 0.65
    }
    let inicial= monto;
    let final = monto + (monto * dias/360 * intereses);
    let f={
    periodo: p++,
    inicial: Number.parseFloat(monto).toFixed(2),
    final: Number.parseFloat(final).toFixed(2)}

    monstosTotales.push(f)
    let lista= document.getElementById("reinversion");
    lista.className= "divReinversion";
    let html="";
    for(let v of monstosTotales){
        
        html += "Periodo: " + v.periodo+ " * Monto inicial:  " + v.inicial + "    Monto final : " + v.final + "<br/> <br/>" ;
       
    }
    lista.innerHTML= html;
  
    a++;

    calcularReinversion(final,dias)
  

}

calcular();