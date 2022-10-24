/**ej 1 */

let producto = 120;
let iva = 0.21;
let resultado = 0;
let resultadoIva= 0;

resultadoIva = producto * iva;
resultado = producto + resultadoIva;
console.log("El valor es de: " +resultado);


/**ej 2 */


var creditos = 0;
creditos = parseInt(prompt("Cuantos creditos ingresa?"));

if(creditos == 4){
    console.log("Accede todas las salas");
}
else if(creditos == 3){
    console.log("Accede a Consolas, Juegos 2D, Juegos 3d");
}
else if(creditos == 2){
    console.log("Accede a Consolas, Juegos 2D");
}
else if(creditos == 1){
    console.log("Accede Consolas");
}

/* ej 3 */

var sec;
sec = parseInt(prompt("elija seccion, presione 1, 2 o 3"));
if(sec == 1){
    console.log("Oficina numero 100");

}
else if(sec == 2){
    console.log("Oficina numero 200");
    
}
else if(sec == 3){
    console.log("Oficina numero 300");
    
}

/** 4 */

var resultado = 0;
resultado = parseInt(prompt("ingrese total"));
if(resultado < 100){
    console.log("no hay descuento, el total es de: " + resultado);
}
else if(resultado >100 && resultado < 300){
    var descuento = 0.05;
    var total = 0;
    total = resultado * descuento;
    console.log("El total es de : " + total);
    break;
}else if(resultado >300 && resultado < 500){
    var descuento = 0.1;
    var total = 0;
    total = resultado * descuento;
    console.log("El total es de : " + total);
    break;
}else if(resultado >500){
    var descuento = 0.15;
    var total = 0;
    total = resultado * descuento;
    console.log("El total es de : " + total);
    break;
}

/** ej 5 */


let contar, max, msg='';
max = parseInt(prompt("Teclear un número entero"));
for(contar = 0; contar < max;  contar++)
{
msg += contar + ", ";
}
msg += contar;   //Evita la coma al final
alert(msg);
 
/**ej 6 */

let num1, menores;
num1 = parseInt(prompt("Escribe un numero"));
for (menores = 0; menores < num1; menores++)
{
    if(menores % 3 == 2){
        console.log(menores);
    }
}



/**ej 8 */

let num, suma, veces, resultado;
for(veces = 0; veces <=4; veces++){
    num = parseInt(prompt("escribe un numero: " + num));
    suma = suma + num;
}
resultado = suma / 4;
console.log("La media es de : " + resultado);

