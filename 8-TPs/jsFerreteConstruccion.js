/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var cantidad;

    largo=document.getElementById("Largo").value;
    ancho=document.getElementById("Ancho").value;

    largo=parseInt(largo);
    ancho;parseInt(ancho);

    cantidad=(largo*2+ancho*2)*3;

    alert(cantidad);
}
function Circulo () 
{
    var radio;
    var cantidad;

    radio=document.getElementById("Radio").value;
    radio=parseInt(radio);

    cantidad= 3.14*radio*2*3;

    alert(cantidad);
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cantidadCemento;
    var cantidadCal;


    largo=document.getElementById("Largo").value;
    largo=parseInt(largo);

    ancho=document.getElementById("Ancho").value;
    ancho=parseInt(ancho);

    area=largo*ancho;

    cantidadCemento=area*2;

    cantidadCal=area*3;

    alert("Usted necesita"+cantidadCemento+" bolsas de cemento "+" y "+ cantidadCal+" bolsas de cal");

}