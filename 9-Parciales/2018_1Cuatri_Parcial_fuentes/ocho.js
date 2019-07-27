function mostrar()
{
var letra;
var numero;
var respuesta="si";
var cantidadNumerosPares=0;
var cantidadNumerosImpares=0;
var cantidadNumeroCero=0;
var numeroPositivo=0;
var acumuladorNumerosPos=0;
var numeroNegativo=0;
var numeroMenor=0;
var numeroMayor;
var promedio;
var acumulador=0;
var contador=0;
var letraMenor;

while(respuesta=="si")
{
    numero=prompt("Indique un numero");
    numero=parseInt(numero);

    while(isNaN(numero)==true || numero<-100 || numero>100)

    {
        numero=prompt("No es un dato valido. Ingrese nuevamente otro numero entre -100 y 100");
        numero=parseInt(numero)
    }

    letra=prompt("Ingrese una letra");

    while(isNaN(letra)==false)
    {
        letra=prompt("No es una letra, Ingrese nuevamente el dato");
    }

    if(numero%2==0 && numero!=0)
    {
        cantidadNumerosPares++;
    }

    else
    {
        if(numero==0)
        {
            cantidadNumeroCero++
        }
        else
        {
            cantidadNumerosImpares++;
        }
        
    }

    if(numero>0)
    {
        numeroPositivo=numeroPositivo+numero;
        acumuladorNumerosPos++;
    }

    else
    {
        numeroNegativo=numeroNegativo+numero;
    }

    respuesta=prompt("Quiere seguir cargando otro dato?");

    if(contador==0 || numero<numeroMenor)
    {
        numeroMenor=numero;
        letraMenor=letra;
    }
    else
    { 
        numeroMayor
    }


}

promedio=numeroPositivo/acumuladorNumerosPos;
if(isNaN(promedio)==true)
{
    promedio="No hay numeros pares";
}
document.write("A)La cantidad de numeros pares es: "+cantidadNumerosPares+"<br>"+"B) La cantidad de numero impares es: "+cantidadNumerosImpares+"<br>"+"C) La cantidad de numeros cero es: "+cantidadNumeroCero+"<br>"+"D) El promedio de numeros pares es :"+ promedio+ "<br>"+ "E) La suma de numeros negativos es: "+numeroNegativo)


}
