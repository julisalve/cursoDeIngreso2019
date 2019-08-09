function mostrar()
{
var letra;
var numero;
var respuesta;
var cantNumPares=0;
var cantNumImpares=0;
var cantCeros=0;
var promedioNumPos;
var acumuladorNumPos=0;
var sumaNumNeg=0;
var letraMax;
var letraMin;
var numeroMax;
var numeroMin;
var cantNumPos=0;
var contador=0;

do
{
letra=prompt("Indique una letra");

    while(isNaN(letra)==false)
    {
    letra=prompt("No es una letra. Reingrese");
    }

numero=prompt("Indique un numero");
numero=parseInt(numero);

    while(isNaN(numero)==true || numero>100 || numero<-100)
    {
    numero=prompt("No es un numero valido. Reingrese");
    numero=parseInt(numero);
    }

    if(numero%2==0 && numero!=0)
    {

    cantNumPares++;
    }
    else if (numero%2!=0)
    {
    cantNumImpares++;
    }
    else
    {
    cantCeros++
    }

    if(numero>0)
    {
    acumuladorNumPos=acumuladorNumPos+numero;
    cantNumPos++;
    }
    else
    {
    sumaNumNeg=sumaNumNeg+numero
    }

    if(contador==0 || numero<numeroMin)
    {
    numeroMin=numero;
    letraMin=letra;
    }
    if (contador==0 || numero>numeroMax)
    {
    numeroMax=numero;
    letraMax=letra;
    }

    respuesta=prompt("Quiere seguir cargdano datos?");
    contador++
}
while(respuesta=="si")



promedioNumPos=acumuladorNumPos/cantNumPos;
document.write("A) La cantidad de nnumero pares es "+cantNumPares+"<br>"+"B) La cantidad de numero impares es "+cantNumImpares+"<br>"+ "C) La cantidad de ceros es "+cantCeros+"<br>"+"D) El promedio de todos los numeros positivos ingresados es "+ promedioNumPos+"<br>"+"E) La suma de todos los numeros negativos es "+sumaNumNeg+"<br>"+"F) El numero mac y su letra es "+numeroMax+" "+letraMax+" y el numero min y su letra es "+numeroMin+" "+ letraMin)


}