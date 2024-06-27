let inputMostrado=true;
let entrada=document.querySelector("#entrada");

window.onload=()=>{
    document.querySelector("#valorAbs").addEventListener("click",valorAbs);
    document.querySelector("#enteroSup").addEventListener("click",enteroSup);
    document.querySelector("#expo").addEventListener("click",expo);
    document.querySelector("#max").addEventListener("click",max);
    document.querySelector("#min").addEventListener("click",min);
    document.querySelector("#redondeo").addEventListener("click",redondeo);
    document.querySelector("#raizC").addEventListener("click",raizC);
    document.querySelector("#truncar").addEventListener("click",truncar);
}
//crear el input 1 
function crearInput1(){
    let input=document.createElement("input");
    input.setAttribute("id","input1");
    input.setAttribute("placeholder","Escribe un número");
    entrada.appendChild(input);
}

//crear el input 2 -> mejorable
function crearInput2(){
    let input=document.createElement("input");
    input.setAttribute("id","input2");
    input.setAttribute("placeholder","Escribe un número");
    entrada.appendChild(input);
}

//borrar boton
function borrarBoton(){
    document.querySelector(".boton").remove();
}

//crear el boton
function crearBoton(){
    let boton=document.createElement("button");
    boton.setAttribute("id","calcular");
    boton.classList.add("boton");
    boton.textContent="Calcular";
    entrada.appendChild(boton);
}

//crear todo 



function valorAbs(){
    crearInput1();
    crearBoton();
}
function enteroSup(){}
function expo(){}
function max(){}
function min(){}
function redondeo(){}
function raizC(){}
function truncar(){}