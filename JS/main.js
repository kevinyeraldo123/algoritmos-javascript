function suma() {
  var a;
  var b;
  var suma;

  a = parseInt(prompt("por favor ingrese el primer valor"));
  b = parseInt(prompt("por favor ingrese el segundo valor"));

  suma = a + b;

  alert("el resultado de la suma es: " + suma);
}

function resta() {
  var a;
  var b;
  var resta;

  a = parseInt(prompt("Ingrese el primer valor"));
  b = parseInt(prompt("Ingrese el segundo valor"));

  resta = a - b;

  alert("El resultado de la resta es: " + resta);
}

function division() {
  var a;
  var b;
  var division;

  a = parseInt(prompt("Ingrese el primer valor"));
  b = parseInt(prompt("Ingrese el segundo valor"));

  division = a / b;

  alert("El resultado de la division es: " + division);
}

function multiplicacion() {
  var a;
  var b;
  var multiplicacion;

  a = parseInt(prompt("Ingrese el primer valor"));
  b = parseInt(prompt("Ingrese el segundo valor"));

  multiplicacion = a * b;

  alert("El resultado de la division es: " + multiplicacion);
}

function Num_mayor() {
  var a;
  var b;
  

  a = parseInt(prompt("Ingrese el primer numero"));
  b = parseInt(prompt("Ingrese el segundo numero"));

  if (a < b) alert("el mator es: " + b);
  else if (a > b) alert("el mayor es: " + a);
  else alert("son iguales");
}

function Num_menor(){
    var a;
    var b;
    var c;

    a = parseInt(prompt("Ingrese el primer numero"));
    b = parseInt(prompt("Ingrese el segundo numero"));
    c = parseInt(prompt("Ingrese el tercer numero"));
    
    if(a < b && a < c)
    alert("el numero menor es: " + a);
    else if(b < a && b < c)
    alert("el numero menor es: " + b);
    else (c < a && c < b)
    alert("el numero menor es: " + c);
}

function par_impar(){
 
    var a;
    a = parseInt(prompt("Ingrese un numero"));
    if (a % 2 == 0)
   alert("El numero es par")
    else
   alert("El numero es impar")
}

function cuadrado(){
    var a; 
    var b;

    a = parseInt(prompt("Ingrese el numero"));
    b = a * a
    alert ("el cuadrado del numero es:" + b)
}

function Area_triangulo(){
    var b;
    var h;
    var a; 

    b = parseInt(prompt("Ingrese la base del triangulo"));
    h = parseInt(prompt("Ingrese la altura del triangulo"));

    a = (b * h / 2);
    alert("el area del triangulo es: " + a);
}

function metros_centimetros(){
    var metros;
    var centimetros;
    
    metros = parseInt(prompt("Ingrese los metros"));
    centimetros = metros * 100

    alert("los centimetros son: " + centimetros);
}

function capital(){
    var capital;
    var ganancia;
    var a_os;
    capital= parseInt(prompt("ingrese su capital"));
    a_os= parseInt(prompt("ingrese a_os inventidos"));
    ganancia= capital * 2,4 * a_os
    total= capital + ganancia
    alert ("la ganacia ya con el capital invertido es: "+ ganancia);
    alert("la ganancia total de los a_os es: "+ total);
}


function a_o(){
  var edad;
  var ao;

  edad= parseInt (prompt("por favor ingrese edad"));
  ao= 2022-edad;
  alert("el año en que nacio es:  "+ ao);


} 

function manzana(){
  var m;
  var k;
  var porcentaje;
  var des1;
  var des2;
  var des3;
  var des4;

  alert("Kilo de manzana a 4.500, menor o igual a 2 kilos 0% de descuento,si es menor o igual a 5 kilos 10% de descuento, si es menor o igual a 10 kilos 15% de descuento, si es mayor a 10 kilos 20% de descuento.")

  k = 4500;
  m = parseInt(prompt("Kilos de manzanas a llevar"));
  porcentaje = m * k
  alert ("porcentaje " + porcentaje);

if (m<=2){
  des1 = k * m 
  porcentaje = des1 / 100 * 0
  alert("No tiene descuento");

}
else if (m>2 && m<=5){
  des2 = k * m 
  porcentaje = des2 / 100 * 10
  alert ("el valor de descuento es: "+porcentaje);
}
else if (m>5 && m<=10){
  des3 = k * m 
  porcentaje = des3 / 100 * 15
  alert ("el valor de descuento es: "+porcentaje);
}
else {
  des4 = k * m 
  porcentaje = des4 / 100 * 20
  alert ("el valor de descusnto es: "+porcentaje);

}

}