let inputMostrado=false;//controla si existe un input en pantalla
let entrada=document.querySelector("#entrada");
let salida=document.querySelector("#salida");
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
function crearInputs(numeroInputs){
    if(inputMostrado){//no hay ni input ni boton en pantalla
        salida.innerHTML="";
        document.querySelector("#input1").remove();
        if (document.querySelector("#input2")){
            document.querySelector("#input2").remove();
        }
        borrarBoton();
        inputMostrado=false;
    }
       
        if(!inputMostrado){
            //envia a crear las entradas de input y boton
            entrada.style.visibility="visible"; //el div se comience a mostrar
            crearInput1();
            if(numeroInputs===2){
                crearInput2();
            }
            crearBoton();
            inputMostrado=true;
        }
    
}



function valorAbs(){
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=>{//si pulsa click en el boton de calcular
        //1. leer lo que contiene el input
        let numero=document.querySelector("#input1").value;
        if (validar(numero)){
            salida.textContent="El valor absoluto de "+ numero + " es "+Math.abs(numero);
        }

    })

}

function enteroSup(){
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=>{
        let numero=document.querySelector("#input1").value;
        if (validar(numero)){
            salida.textContent="El entero superior de "+ numero+ " es " +Math.ceil(numero);
        }
    })
}

function expo(){
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click",()=>{
        let base=document.querySelector("#input1").value;
        let exp=document.querySelector("#input2").value;
        if(validar(base) && validar(exp)){
            salida.innerHTML="El resultado de "+base+"<sup>"+exp+"</sup> es "+Math.pow(base,exp);
        }
})
}



function max(){
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click",()=>{
        let numero1=document.querySelector("#input1").value;
        let numero2=document.querySelector("#input2").value;
        if(validar(numero1) && validar(numero2)){
            salida.innerHTML="El mayor entre "+numero1+" y "+numero2+" es "+Math.max(numero1,numero2);
        }
})
}

function min(){
    crearInputs(2);
    document.querySelector("#calcular").addEventListener("click",()=>{
        let numero1=document.querySelector("#input1").value;
        let numero2=document.querySelector("#input2").value;
        if(validar(numero1) && validar(numero2)){
            salida.innerHTML="El menor entre "+numero1+" y "+numero2+" es "+Math.min(numero1,numero2);
        }
})
}

function redondeo(){
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=>{
        let numero=document.querySelector("#input1").value;
        if (validar(numero)){
            salida.textContent="El "+ numero+ " redondeado es " +Math.round(numero);
        }
    })

}

function raizC(){
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=>{
        let numero=document.querySelector("#input1").value;
        if (validar(numero)){
            salida.textContent="La raíz cuadrada de "+ numero+ " es " +Math.sqrt(numero).toFixed(3);//toFixed(num) muestra ese num de decimales
        }
    })
}

function truncar(){
    crearInputs(1);
    document.querySelector("#calcular").addEventListener("click",()=>{
        let numero=document.querySelector("#input1").value;
        if (validar(numero)){
            salida.textContent="La parte entera de "+ numero+ " es " +Math.trunc(numero);
        }
    })
}



function validar(numero){
    if(isNaN(numero)){//is not a numer isNaN(nummero) devuelve true si se cumple que no es numerico
        salida.textContent="La operación no se puede realizar";
        return false;
    }else{
        return true;
    }
}