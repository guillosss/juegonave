// se  crea la funcion flecha 
document.addEventListener("DOMcontentLoaded",function(){
    const cuadrostablero= document.querySelectorAll(".tablero div");
    const resultadoaliens=document.querySelector(".conteo");
    let cuadros = 15;
    let posicionnave= 202;
    let posicionaliens= 0;
    let aliensmuertos= [];
    let resultado= 0;
    let direccion=1;
    let alienID;

    //posicion inicial de los aliens en el tablero 
    let alients=[
        0,1,2,3,4,5,6,7,8,9,
        15,16,17,18,19,20,21,22,23,24,
        30,31,32,33,34,35,36,37,38,39
    ]

    //colocar los alien en el tablero se pone en el classlist el "aliens de CSS"
    alients.forEach(alien => cuadrostablero[posicionaliens + alien].classList.add("aliens"));

    //poner la nave 
    cuadrostablero[posicionnave].classList.add("nave");

});