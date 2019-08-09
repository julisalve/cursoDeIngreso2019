function mostrar()
{
var animal;
var peso;
var temperatura;
var respuesta;
var cantTemPares=0;
var animalMasPesado;
var temperaturaMasPesado;
var masPesado;
var cantAnimalesMenosCeroGrados=0;
var promedioPeso;
var acumuladorPeso=0;
var pesoMaxBajoCero;
var pesoMinBajoCero;
var contador=0;



do
{
animal=prompt("Indique el nombre de un animal");

while(isNaN(animal)==false)
{
    animal=prompt("No es un nombre de animal. Reingrese");
}

peso=prompt("Indique peso");
peso=parseInt(peso);

while(isNaN(peso)==true || peso>1000 || peso<1)
{
    peso=prompt("No es un peso valido. Reingrese");
    peso=parseInt(peso);
}

temperatura=prompt("Indique temperatura del habitat");
temperatura=parseInt(temperatura);

while(isNaN(temperatura)==true || temperatura>30 || temperatura<-30)
{
    temperatura=prompt("No es una temperatura valida. Reingrese");
    temperatura=parseInt(temperatura);
}

if(temperatura%2==0 && temperatura!=0)
{
    cantTemPares++;
}


if(contador==0 || peso>masPesado)
{
    masPesado=peso;
    animalMasPesado=animal;
    temperaturaMasPesado=temperatura;
}

if(temperatura<0)
{
    if(cantAnimalesMenosCeroGrados==0 || pesoMaxBajoCero<peso)
    {
        pesoMaxBajoCero=peso;
    }

    if(cantAnimalesMenosCeroGrados==0 || pesoMinBajoCero>peso)
    {
        pesoMinBajoCero=peso;
    }
    
    cantAnimalesMenosCeroGrados++;
}


acumuladorPeso=peso+acumuladorPeso;
contador++;

respuesta=prompt("Quiere seguir cargando datos?");
}
while(respuesta=="si")


promedioPeso=acumuladorPeso/contador;

document.write("A) La cantidad de temperaturas pares es: "+cantTemPares+"<br>");
document.write("B) El nombre del animal mas pesado es "+animalMasPesado+" y su temperatura es de: "+temperaturaMasPesado+ "<br>");
document.write("C) La cantidad de animales que viven a menos de cero grados es: "+cantAnimalesMenosCeroGrados+"<br>");
document.write("D) El promedio del peso de todos los animales es: "+ promedioPeso+ "<br>");
document.write("F) El peso maximo del animal que vive menos bajo cero es:" +pesoMaxBajoCero+" y el minimo es "+pesoMinBajoCero );
}